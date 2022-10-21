# Api Rest Con express.js 
Realizamos una Api rest de una simulacion de una control escolar, donde contamos con diferentes entidades como **students, classes, users, careers y class_students**.

## ¿Qué debo hacer para usar este proyecto?
En este proyecto usamos las siguientes tecnologías:
1. Node.js
2. express.js
3. postgresql
4. sequelize
5. sequelize-cli
6. dotenv

### Preparar el proyecto
Ahora, lo que debemos hacer es crear un archivo **.env** para definir la variable de entorno que seria la cadena de conección de **pg** checar el archivo .env.example donde biene espesificada como debe ser la cadena y sus valores.

Seguido de eso lo que haremos es instalar todas as dependencias utilizadas con el comando:
`npm install`

### Correr las migraciones
Antes de correr cualquier migración debemos de ir a nuestro **pgAdmin** o a la **consola** y crear una base de datos, yo utilizé una con nombre **shool**. 

Una vez teniendo ya la base de datos corremos la migración:
`npm run migrations:run`

Esto nos va a crear todas nuestras tablas deacuerdo a los modelos que nosostros hayamos creado.

### Correr el proyecto
Si todo hasta el momento va bien, corremos el proyecto con: 
`npm run server`

En el proyecto esta una carpeta que se llama **REQUEST** donde esta el archivo que podras importar en postman. 

**¡SUERTE BROO!**
