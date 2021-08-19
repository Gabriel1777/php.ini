<?php

require("vendor/autoload.php");

use Spatie\DbDumper\Databases\MySql;

class Backup {

	protected $host;

	protected $port;

	protected $database;

	protected $username;

	protected $password;

	protected $dump_path;

	protected $mysqldump_path;

	public function __construct($dump_path = null, $mysqldump_path = null){
		$this->dump_path = $dump_path;
		$this->mysqldump_path = $mysqldump_path;
		$this->host = '127.0.0.1';
		$this->port = '3306';
		$this->database = 'colcagro';
		$this->username = 'root';
		$this->password = '';
	}

	public function export(){
		$file = $this->dump_path ? $this->dump_path : "backups/colcagro-" . date('Y-m-d') . ".sql";
		$dump = MySql::create()
		           ->setDumpBinaryPath($this->mysqldump_path)
                   ->setDbName($this->database)
                   ->setUserName($this->username)
                   ->setPassword($this->password)
                   ->setHost($this->host)
                   ->dumpToFile($file);
	}
}