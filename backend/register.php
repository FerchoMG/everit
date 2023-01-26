<?php
include_once('db.php');
//recibo los datos del formulario
$nombres=$_POST['nombres'];
$email=$_POST['email'];
$edad=$_POST['edad'];
$mensaje=$_POST['mensaje']
$conectar=conn();
$sql="INSERT INTO datos (nombres, email, edad, mensaje) VALUES ('$nombres', '$email', '$edad', '$mensaje')";
$result = mysqli_query ($conectar,$sql);
echo "Los datos fueron almacenados correctamente en la base de datos";
?>