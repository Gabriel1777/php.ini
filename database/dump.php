<?php

require('backup.php');

$dump = new Backup(null, 'C:\xampp\mysql\bin');
$dump->export();