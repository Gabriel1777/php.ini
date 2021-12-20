<?php

shell_exec('mysqldump -P 25060 -h colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com -u doadmin -p colcagro > /root/php.ini/database/backups/colcagro' . date('Y-m-d') . '.sql');
#password:	ssfzj511fky0ha3v

#shell_exec('mysqldump -P 25060 -h colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com -u doadmin -p colcagro > /root/php.ini/database/backups/colcagro.sql');

#shell_exec('mysqldump -P 25060 -h colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com -u colcagrodb -p colcagro > /root/php.ini/database/backups/colcagro' . date('Y-m-d') . '.sql');

#shell_exec('C:\xampp\mysql\bin\mysqldump -P 25060 -h colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com -u doadmin -p colcagro > C:\Users\Gabrielito\Desktop\folders\db\colcagro' . date('Y-m-d') . '.sql');