#!/usr/bin/php
<?php


$u = "http://dev.virtualearth.net/REST/V1/Routes/Driving?o=json&wp.0=2110%20Colorado%20Ave,Los%20Angeles,CA&wp.1=915%20rosemont%20ave,90026&avoid=minimizeTolls&du=mi&key=AtyXrNLra-Ltmse3ycU82taqqTZ1pC0zUgXE1gEyxcZx23gwyP52bE_s4M5phkU-";

$j = file_get_contents($u);

// var_dump($j);
// echo "\n\n----\n\n";
$k = json_decode($j, false, 1024);
$duration = $k->resourceSets[0]->resources[0]->travelDurationTraffic/60;

echo "Commute home: ". round($duration, 1)." min";


?>