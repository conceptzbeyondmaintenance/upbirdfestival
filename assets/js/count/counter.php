<?php
$file = "counter.txt";

// Check if file exists, otherwise create it
if (!file_exists($file)) {
    file_put_contents($file, "0");
}

// Read current count
$count = (int)file_get_contents($file);

// Increment count
$count++;

// Save new count
file_put_contents($file, $count);

// Return JSON response
echo json_encode(["count" => $count]);
?>
