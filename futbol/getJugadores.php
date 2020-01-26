<?php
require_once 'dbconfig.php';

$link = abrirConexion('localhost', 'newuser', 'password', 'futbol');

// Consulta
$result = consultarBD('SELECT * FROM equipos', $link);


$futbol = array();
$jugadores = array();

while ($fila = extraerResultados($result)) {

   $idEquipo = $fila[0];
   $nombre = $fila[1];
   $color = $fila[2];

   $queryJugadores = consultarBD(
      'SELECT * FROM jugadores INNER JOIN equipos ON ' . $idEquipo . ' = jugadores.idequipo group by jugadores.id;',
      $link
   );

   while ($resultJugadores = extraerResultados($queryJugadores)) {
      $idJugador = $resultJugadores[0];
      $nombreJugador = $resultJugadores[1];

      $jugadores[] = array(
         'idJugador' => $idJugador, 'nombreJugador' => $nombreJugador, 'idEquipo' => $idEquipo
      );
   }

   $futbol[] = array(
      'idEquipo' => $idEquipo, 'nombreEquipo' => $nombre, 'color' => $color, 'jugadores' => $jugadores
   );
}

echo json_encode($futbol);
