<?php
function conn(){
    $host="localhost";
    $usuariodb="root";
    $password="";
    $dbname="usuario";
    $conectar = mysqli_connect($host, $usuariodb, $password, $dbname);
return $conectar;
}
?>