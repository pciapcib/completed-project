<?php

$word = $_REQUEST['word'];

$dict = "abcdefgh";

if ( !strpos($dict, $word) ) {
    echo "-1";
    return;
}

$vowels = array('a', 'e', 'i', 'o', 'u');

$score = 0;
for ($i=0; $i<strlen($word); $i++) {
  if (in_array($word[$i], $vowels))
    $score += 1;
  else
    $score += 2;
}

echo $score;

?>
