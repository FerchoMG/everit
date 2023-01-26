<?php
function conn(){
    $hostname="localhost";
    $usuariodb="root";
    $password="12345";
    $dbname="usuario";
    $conectar = mysqli_connect($hostname, $usuariodb, $password, $dbname);
return $conectar;
}
?>