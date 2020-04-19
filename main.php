<?php

require 'app/start.php';

$object = 'flareMini.mp4';
$expiry = new DateTime('+10 minutes');

$url = $cloudfront->getSignedUrl([
    'url' => "{$config['cloudfront']['url']}/{$object}",
    'private_key' => "{$config['cloudfront']['private_key']}",
    'key_pair_id' => "{$config['cloudfront']['key_pair_id']}",
    'expires' => $expiry->getTimestamp()
]);

echo $url;
?>