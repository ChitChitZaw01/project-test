# Medical Record Backend

This is a medical record backend api with NestJS, PostgreSQL and JWTtoken.

## Prerequisites

- Visual Studio Code or code editor of your choice
- Nodejs
- Nestjs
- postgresql
- pgAdmin

## Database Restoring

Create database name like "pgwithauth" in this app.module.ts and others in this app.module.ts are changed according to your username and password.
The .bak file(file name-db2.bak) in this repository was restored the following command

```
psql -U your_postgresql-servername <!-- ** If this command doesn't work, you must add PostgreSQL bin directory to system   -->

CREATE DATABASE pgwithauth;

\c pgwithnest 

pg_restore -U <username> -d <dbname> -v <backup_file.bak>

```

## How to build and run the project

When cloning or downloading the repository, the following commands are run in this repository directory.

```
npm install
nest start
```

## Acknowledgements

The file structure is based on [this nestjs crud tutorial](https://medium.com/simform-engineering/nestjs-and-postgresql-a-crud-tutorial-32aa78778752) and [this tutorial for authentication](https://docs.nestjs.com/security/authentication?utm_source=chatgpt.com).
