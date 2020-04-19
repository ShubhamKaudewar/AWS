<?php 

use Aws\Cloudfront\CloudFrontClient;

require 'vendor\autoload.php';

$config = require('config.php');


//Cloudfront
$cloudfront = CloudFrontClient::factory([
    'version' => 'latest',
    'region' => 'ap-south-1',
    'key_pair_id' => $config['cloudfront']['key_pair_id'],
    'private_key' => $config['cloudfront']['private_key']
]);
?>