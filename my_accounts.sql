/*CREATE DATABASE my_accounts;*/

CREATE USER 'mel'@'localhost' IDENTIFIED BY 'azer';

GRANT ALL PRIVILEGES ON my_accounts TO 'mel'@'localhost';

GRANT SELECT,CREATE,UPDATE,DELETE,ALTER,INSERT ON my_accounts.* TO 'mel'@'localhost';

flush PRIVILEGES;

INSERT INTO bank VALUES (1, 'BNP', 3000000);

SELECT * FROM bank;