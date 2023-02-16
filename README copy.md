# Express Authentication Skeleton

Данный репозиторий содержит пример реализации аутентификации с помощью `express`.

Совсем не обязательно использовать все концепции, применённые здесь, при обучении.
Но в реальном проекте было бы неплохо.

Так что советуем разобраться в коде.

## Какие темы полезно разобрать

* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* [Constraint validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)


 ##  Для запуска проекта



 1. npm install

 2. psql postgres
    CREATE DATABASE learnsessiondb;
    CREATE USER userdb WITH ENCRYPTED PASSWORD 'userdb';
    GRANT ALL PRIVILEGES ON DATABASE learnsessiondb TO userdb;
    
https://stackoverflow.com/questions/25000183/node-js-postgresql-error-no-pg-hba-conf-entry-for-host
https://dba.stackexchange.com/questions/83984/connect-to-postgresql-server-fatal-no-pg-hba-conf-entry-for-host

3. NODE_ENV="production" npx sequelize db:migrate
4. NODE_ENV="production" npm run crsestable -  для создания в БД таблички для хранения сессий
5. npx sequelize db:migrate -  для локальной бд
6. npm run crsestable - для локальной бд

7. npm run dev
# authSkeletonCookiePostgres
