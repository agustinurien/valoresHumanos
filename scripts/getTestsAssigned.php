<?php
$idLegajo = $_GET['idLegajo'];

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
  $res = $conn->query("SELECT * FROM `legajos` WHERE `id_legajo`= $idLegajo") or die(print($conn->errorInfo()));

  $data = [];

  while($item = $res->fetch(PDO::FETCH_OBJ)){
    $data[] = [
      'idLegajo' => $item->id_legajo,
      'nombres' => utf8_encode($item->nombres),
      'testsAsignados' => utf8_encode($item->testsAsignados)
    ];
  }

  
  header('Content-Type: application/json');
  echo json_encode($data);

  $conn = null; // Cerrar la conexión manualmente
  
} catch(PDOException $err) {
  echo "Connection failed: " . $err->getMessage();
  die();
}
?>