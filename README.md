# Login-Backend
Desarrollo de la lógica del backend



1. `POST /api/auth/signup`: Crear un nuevo usuario
```js
{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
```


2. `POST /api/auth/signin`: Login usuario

Signin expects

```js
{
    email: string,
    password: string
}
```


* `start`: Starts the server with node
* `start:dev`: Starts the server in watch mode
* `db:up`: Creates the database
* `db:down`: Drops the database
* `tables:up`: Creates database tables
* `db:init`: Creates both the database and tables


## Tools
* NodeJS/Express: Server
* MySQL: Storage
* JWT: Token based authentication
* bcryptjs: Password security
* winston/morgan: Logs
* Joi: Validations


Instalar las dependecias o librerias

```sh
npm install
```

Inicializar la base de datos

```sh
npm run db:init
```

iniciar el proyecto

```sh
npm start
```

