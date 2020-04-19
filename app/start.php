<?php 

use Aws\S3\S3Client;
use Aws\Cloudfront\CloudFrontClient;
use Aws\Credentials\Credentials;

require 'C:\Users\Shubham\vendor\autoload.php';

$config = require('config.php');

// S3
$s3 = S3Client::factory([
    'key' => $config['s3']['key'],
    'version' => $config['s3']['version'],
    'region' => $config['s3']['region'],
    'secret' => $config['s3']['secret']
]);

//Cloudfront
$cloudfront = CloudFrontClient::factory([
    'version' => 'latest',
    'region' => 'ap-south-1',
    'key_pair_id' => $config['cloudfront']['key_pair_id'],
    'private_key' => $config['cloudfront']['private_key']
]);
?>