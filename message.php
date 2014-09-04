<?php
	switch ($_SERVER['HTTP_ORIGIN']) {
    case 'http://from.com': case 'https://from.com':
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    break;
	}

	$name = $_POST['name'];
	$message = $_POST['message'];
	$fp = fopen('message.txt','a');
	fwrite($fp,name."\n");
	fwrite($fp,message."\n");
	$next_mark = "-------/*&-------\n";
	fwrite($fp, $next_mark);
	fclose($fp);
?>