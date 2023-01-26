<?php
include_once('db.php');
//recibo los datos del formulario
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$edad=$_POST['edad'];
$mensaje=$_POST['mensaje']
$connect=conn();
$query="INSERT INTO datos (nombre, email, edad, mensaje) VALUES ('$nombre', '$email', '$edad', '$mensaje')";
$result = mysqli_query ($connect,$query);
echo "Los datos fueron almacenados correctamente en la base de datos";
?>