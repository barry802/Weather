<?php

$city=$_GET['city'];

//remove spaces in the user input for cites with 2 names
$city=str_replace(" ", "", $city);

$contents=file_get_contents("http://www.weather-forecast.com/locations/".$city."/forecasts/latest");

//searches page link for the "ddd"
preg_match('/3 Day Weather Forecast Summary:<\/b><span class="read-more-small"><span class="read-more-content"> <span class="phrase">(.*?)</s', $contents, $matches);

//extract weather forcast from:
//(.*?)
///These match whatever is between day & Summary, retrns Weather Forecast
//</s ...multi line check
//test printff
echo $matches[1];

?>
