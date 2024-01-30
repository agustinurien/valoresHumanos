<?php
$idLegajo = $_GET['id'];
$num = $_GET['num'];
$exists = $_GET['exists'];
$data = json_encode($_GET['data']);
$test = "test_" . $num;

// Conexión a la base de datos
$servername = '167.250.5.72'; //Nombre del servidor de la base de datos
$port = '3306'; //Puerto del servidor de la base de datos
$dbname = 'fghocmdr_app'; //Nombre de la base de datos
$username = 'fghocmdr_appAdmin'; //Nombre de usuario de la base de datos
$password = 'R#3dt#dPypn8'; //Contraseña de la base de datos

try {
  $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password);
  // Establecer el modo de error PDO en excepción
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

  // Aquí realizarías tus consultas y manipulaciones de la base de datos
  if(!$exists){
    $res = $conn->query("INSERT INTO `resueltos`(`id_legajo`, `test_1`, `test_2`, `test_3`, `test_4`, `test_5`, `test_6`, `test_7`, `test_8`, `test_9`, `test_10`) VALUES ('$idLegajo','$data','','','','','','','','','')") or die(print($conn->errorInfo()));
  } else {
    $res = $conn->query("UPDATE `resueltos` SET $test=$data WHERE `id_legajo`= $idLegajo") or die(print($conn->errorInfo()));
  }

  $conn = null; // Cerrar la conexión manualmente
  
} catch(PDOException $err) {
  echo "Connection failed: " . $err->getMessage();
  die();
}
?>