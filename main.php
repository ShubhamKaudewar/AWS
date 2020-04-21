<?php

require 'app/start.php';

$object = 'video_20190725_192309.mp4';
$expiry = new DateTime('+10 minutes');

$url = $cloudfront->getSignedUrl([
    'url' => "{$config['cloudfront']['url']}/{$object}",
    'private_key' => "{$config['cloudfront']['private_key']}",
    'key_pair_id' => "{$config['cloudfront']['key_pair_id']}",
    'expires' => $expiry->getTimestamp()
]);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video</title>
</head>
<body>
    <video controls width="768">
        <source src="<?php echo $url; ?>" type="video/mp4">
    </video>
</body>
</html>