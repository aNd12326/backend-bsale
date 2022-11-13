<h1>Rest Api Bsale  <img src="https://i.imgur.com/PAI2AF0.jpg"/></h1>

Rest Api creada con una base de datos relacional "MYSQL" otorgada en el desafío, la cual nos va a permitir obtener los datos sobre los productos y sus propias categorias, de igual manera asi poder filtrarlos por nombre y catergoria.

<br/>

<h2>Tecnologias Utilizadas</h2>
<ul>
<li>Mysql: Sistema de gestión de bases de datos relacional.</li>
<li>NodeJS : Entorno de ejecucion para javascript construido con el motor v8 de Chrome.</li>
<li>Javascript : Lenguaje de programacion interpretado, orientado a objetos.</li>
<li>Express : Entorno de trabajo para aplicaciones web.</li>
</ul>

## Procedimiento

Para empezar la creacion de la api se instalo el entorno de trabajo express, despues se utilizo javacript para realizar las configuraciones, al igual que node js para hacer las pruebas necesarias y ver el funcionamiento de las configuraciones. Se utilizo dependecias como mysql para crear conecciones y consultas, y tambien dotenv para proteger las variables de entorno. Por ultimo se utilizo nodemon para reiniciar el servidor cuando se realice un cambio y morgan para registrar cada una de las consultas que realiza a la api.

<h2>Funcionamiento</h2>
La api se conecta a una base de datos en MYSQL creando un pool de conecciones, que permiten estar conectado cuando alguna
coneccion termina por inactividad a esto se le llama keep alive, significa que el servidor no cerrara la coneccion despues
de cumplir con la solucitud. Se crearon modelos para el funcionamiento de los controladores y rutas para los productos y las categorias.

<br/>
<br/>

<h2>Documentacion</h2>

<br/>

## Obtener productos

Se obtiene un matriz de objetos, mediante el cual contiene todos los datos de los productos.

```

GET: https://bsale-back.onrender.com/api/products

"products":[
    {
        // all product data
    }
]

```

## Obtener categorias

Se obtiene una matriz de objetos como respuesta, mediante el cual contiene todos los datos de las categorias.

```

GET: https://bsale-back.onrender.com/api/categories

"categories": [
    {
        // all category data
    },
]

```

## Obtener productos por id

Se obtiene como respuesta una matriz de objetos la cual contiene toda la informacion del producto relacionado con sus categorias.

```

GET: https://bsale-back.onrender.com/api/categories/:id

"categories": [
    {
        // all product data with its own id
    },
]

```

## Obtener productos por nombre

Se obtiene una matriz de objetos, mediante el cual contiene todos los productos o el producto que coincidan con el valor digitado por el usuario.

```
GET: https://bsale-back.onrender.com/api/products?name="product name"

"products": [
    {
        // product 1
    },
    {
        // product 2
    }...
]

```

<br/>

<h1>Levantar el servidor de manera local</h1>
<br/>

Para poder ejecutar el servidor de manera local primero se debe crear un archivo .env en el cual debe contener la siguiente informacion.

```
HOST_DB=  "servidor de la base de datos"
USER_DB=  "usuario de la base de datos"
PASSWORD_DB= "contraseña de la base de datos"
DATABASE_NAME=  "nombre de la base de datos"
PORT= "example... 3001"
```

<br/>

Finalmente ejecutar los siguientes comandos:

```
npm i
npm start
```

## Produccion

Esta api fue deployada render:
<br/>

<ul>
<li>Rest Api Bsale: <a href="https://bsale-back.onrender.com/">link</a></li>
</ul>

<br/>

<h2>Portafolio</h2>
<ul>
<li><a href="https://portfolio-anderson-one.vercel.app/">More about me 😄</a></li>
</ul>
