<?php
    function abrirConexion($servidor, $usuario, $password, $baseDatos) {
        return new mysqli($servidor, $usuario, $password, $baseDatos);
    }

    function cerrarConexion($link) {
        mysqli_close($link);
    }

    function consultarBD($consulta, $link) {
        return mysqli_query($link, $consulta);
    }

    function extraerResultados($result) {
        return mysqli_fetch_array($result);
    }
?>