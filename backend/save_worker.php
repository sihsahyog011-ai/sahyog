<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);
    exit;
}

$name = trim($data["name"] ?? "");
$trade = trim($data["trade"] ?? "");
$location = trim($data["location"] ?? "");
$rate = intval($data["rate"] ?? 0);
$years = intval($data["years"] ?? 0);
$phone = trim($data["phone"] ?? "");
$bio = trim($data["bio"] ?? "");

if ($name === "" || $trade === "" || $location === "" || $rate <= 0 || $phone === "") {

    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields"
    ]);

    exit;
}

$file = __DIR__ . "/data/workers.json";

if (!file_exists($file)) {
    file_put_contents($file, "[]");
}

$workers = json_decode(file_get_contents($file), true);

if (!is_array($workers)) {
    $workers = [];
}

$ids = array_column($workers, "id");

$newId = empty($ids) ? 1 : max($ids) + 1;

$newWorker = [
    "id" => $newId,
    "name" => $name,
    "trade" => $trade,
    "location" => $location,
    "rate" => $rate,
    "years" => $years,
    "rating" => 5.0,
    "phone" => $phone,
    "bio" => $bio !== "" 
        ? $bio 
        : "Local household service professional."
];

$workers[] = $newWorker;

file_put_contents(
    $file,
    json_encode($workers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE),
    LOCK_EX
);

echo json_encode([
    "success" => true,
    "message" => "Worker saved successfully",
    "worker" => $newWorker
]);

?>