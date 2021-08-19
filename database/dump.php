<?php

shell_exec('mysqldump -P 25060 -h colcagro-mysql-do-user-8563681-0.b.db.ondigitalocean.com -u colcagrodb -p colcagro > /root/php.ini/database/backups/colcagro' . date('Y-m-d') . '.sql');