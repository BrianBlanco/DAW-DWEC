<?php
require_once 'dbconfig.php';
 
 $query = "SELECT * FROM jugadores";


 $stmt = $DBcon->prepare($query);
 $stmt->execute();
 
 $userData = array();
 
 
 while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
  $userData['AllUsers'][] = $row;
 }
 
 echo json_encode($userData);



 ?>