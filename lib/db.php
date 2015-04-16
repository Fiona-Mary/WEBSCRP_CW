<?php
$hostname = 'localhost';
  
/*** mysql username ***/
$username = 'root';
  
/*** mysql username ***/
$password = '';

try {
  global $dbh;
  $dbh = new PDO("mysql:host=$hostname;dbname=webscrp", $username, $password);
  $sql = "SELECT pro_ID, name, description, price, type
          FROM product
          ORDER BY pro_ID;";

 $range = array();
 foreach ($dbh->query($sql) as $row) :
          $pro_id = $row['pro_ID'];
          $name = $row['name'];
          $desc = $row['description'];
          $price = $row['price']; 
          $type =$row['type'];
          
          $product = array($pro_id, $name, $desc, $price, $type);
          $range[] = $product;
          
        endforeach;
    echo json_encode($range);

    $dbh = null;
  }
  catch(PDOException $e)
  {
    echo $e->getMessage();
  }
