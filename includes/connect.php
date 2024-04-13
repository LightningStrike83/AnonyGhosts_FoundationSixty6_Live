<?php
$dsn = "mysql:host=localhost;dbname=hswurwd7_foundationsixty6;charset=utf8mb4";
try {
$connection = new PDO($dsn, 'hswurwd7_public', '9LH7n2B7y?NG');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}
?>