<!-- DB: foundationSixty6db -->

<?php
//connect to the database

        //mssql/microsoft db PDO CAN BE ALSO USED 
$dsn = "mysql:host=localhost;dbname=foundationSixty6db;charset=utf8mb4";
try {
  // creates an instance of an object
$connection = new PDO($dsn, 'root', 'root');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}

?>