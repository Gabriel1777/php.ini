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
		$this->host = 'colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com';
		$this->port = '25060';
		$this->database = 'colcagro';
		$this->username = 'colcagrodb';
		$this->password = 'sEguridad187.,qwertyui';
	}

	public function export(){
		$file = $this->dump_path ? $this->dump_path : "backups/colcagro-" . date('Y-m-d') . ".sql";
		$dump = MySql::create()
		           #->setDumpBinaryPath($this->mysqldump_path)
                   ->setDbName($this->database)
                   ->setUserName($this->username)
                   ->setPassword($this->password)
                   ->setHost($this->host)
                   ->dumpToFile($file);
	}
}