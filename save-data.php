<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'POST required']);
    exit;
}

$raw = file_get_contents('php://input');
$record = json_decode($raw ?: '', true);

if (!is_array($record) || empty($record['form']) || empty($record['data'])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON record']);
    exit;
}

$file = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'form-submissions.json';
$dir = dirname($file);

if (!is_dir($dir)) {
    mkdir($dir, 0775, true);
}

$stored = ['version' => 1, 'submissions' => []];
if (is_file($file)) {
    $existing = json_decode((string) file_get_contents($file), true);
    if (is_array($existing) && isset($existing['submissions']) && is_array($existing['submissions'])) {
        $stored = $existing;
    }
}

$stored['submissions'][] = $record;
$stored['updatedAt'] = gmdate('c');

$written = file_put_contents(
    $file,
    json_encode($stored, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    LOCK_EX
);

if ($written === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not write JSON file']);
    exit;
}

echo json_encode(['ok' => true, 'saved' => true]);
