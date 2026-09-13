<?php

header("Content-Type: application/json");

// JSON file where requests will be stored
$dataFile = __DIR__ . "/data/requests.json";

// Make sure the data folder exists
if (!is_dir(__DIR__ . "/data")) {
    mkdir(__DIR__ . "/data", 0777, true);
}

// Create JSON file if it doesn't exist
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, "[]");
}

// Get JSON data sent from JavaScript
$input = file_get_contents("php://input");

$data = json_decode($input, true);

// Check if valid JSON was received
if (!is_array($data)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid request data."
    ]);

    exit;
}


// Required fields
$workerId = $data["workerId"] ?? "";
$worker   = trim($data["worker"] ?? "");
$customer = trim($data["customer"] ?? "");
$message  = trim($data["message"] ?? "");


// Validate required information
if (
    empty($workerId) ||
    empty($worker) ||
    empty($customer)
) {

    echo json_encode([
        "success" => false,
        "message" => "Required fields are missing."
    ]);

    exit;
}


// Read existing requests
$fileContent = file_get_contents($dataFile);

$requests = json_decode($fileContent, true);


// If file is empty or invalid, start with empty array
if (!is_array($requests)) {
    $requests = [];
}


// Create new request
$newRequest = [
    "id" => time() . rand(100, 999),
    "workerId" => $workerId,
    "worker" => $worker,
    "customer" => $customer,
    "message" => $message,
    "createdAt" => $data["createdAt"] ?? date("c")
];


// Add request
$requests[] = $newRequest;


// Save request to JSON file
$result = file_put_contents(
    $dataFile,
    json_encode(
        $requests,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    ),
    LOCK_EX
);


// Check if saving was successful
if ($result === false) {

    echo json_encode([
        "success" => false,
        "message" => "Could not save request."
    ]);

    exit;
}


// Success response
echo json_encode([
    "success" => true,
    "message" => "Request saved successfully.",
    "request" => $newRequest
]);

?>