<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$file = __DIR__ . "/data/workers.json";

if (!file_exists($file)) {
    echo json_encode([]);
    exit;
}

$workers = file_get_contents($file);

echo $workers;

?>