<?php

$data = JSON_DECODE(file_get_contents('php://input'));

$data->response_id = $data->conversation_id;
$data->response    = $data->message;

unset($data->conversation_id);
unset($data->message);

var_dump($data);

?>

