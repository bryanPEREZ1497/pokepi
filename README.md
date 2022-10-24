<h1>pokeAPI</h1>
<hr><p>REST API sobre personajes de la serie animada POKEMON. Construida usando Nodejs</p><h2>Technologies Used</h2>
<hr><ul>
<li>JavaScript</li>
</ul><ul>
<li>NodeJS</li>
</ul><ul>
<li>Expressjs</li>
</ul><h2>Features</h2>
<hr><ul>
<li>Documentación en Swagger</li>
</ul><ul>
<li>Contiene la REST API y la web SPA Frontend PokeAPI</li>
</ul><h5>Steps</h5><ul>
<li>Preparar el ambiente de desarrollo, tener instalado nodejs, y un VSCode como editor de código.</li>
</ul><ul>
<li>Establecer la estructura del proyecto siguiendo una arquitectura limpia, empleando controllers, routes, models, middlewares.</li>
</ul><ul>
<li>Diseñar la base de datos, para presentación del diseño usé LucidChart</li>
</ul><ul>
<li>Versioné la api, para ello se establece un directorio correspondiente a la versión dentro del cual se guardan los endpoints</li>
</ul><ul>
<li>Creación de la base de datos en Mongo Atlas para tenerla en la nube.</li>
</ul><ul>
<li>Implementación de la base de datos. Creación de los modelos mediante mongoose.</li>
</ul><ul>
<li>Configuración inicial del servidor. Para ello creé el index.js donde se llama a las librerías a usar, como expressjs. Aquí se lleva a cabo la conexión a la base de datos, así como el llamado a los middlewares como cors para permitir conexiones de clientes HTTP y express.json, y un error handler que creé con el fin de centralizar la respuesta en caso de error.</li>
</ul><ul>
<li>Crear el archivo de configuración para Swagger, importante es que se establezcan las rutas que se quiere documentar y la seguridad que se va a emplear.</li>
</ul><ul>
<li>Otras configuraciones se llevan a cabo como el llamado V1Docs para swagger, escuchar al puerto, la configuración para servir la SPA Frontend, mediante app.use(express.static('public')).</li>
</ul><ul>
<li>Otro punto importante es el uso de dotenv solo en desarrollo, debido a la cual se debe establecer la condición apropiada.</li>
</ul><ul>
<li>Crear el archivo de conexión de MongoDB.</li>
</ul><ul>
<li>Lo siguiente es las rutas: establecer los endpoints y sus respectivos manejadores dentro de los controladores.</li>
</ul><ul>
<li>Para enviar datos de la DB usé Mongoose, por ejemplo para recuperar los pokemon se emplea el metodo find.</li>
</ul><ul>
<li>Para la autenticación empleé jwt, un token que se otorga y que el cliente debe enviar junto con cada petición a los endpoints protegidos. Los endpoint se protegen con el middleware authenticateToken</li>
</ul><ul>
<li>Empleé bcrypt para cifrar y descrifrar el password de los usuarios.</li>
</ul><ul>
<li>Documentar los endpoints y los modelos para que puedan ser cargados y visualizados en la página de visualización que genera Swagger.</li>
</ul><ul>
<li>Copié y pegué los archivos generados en el build del frontend dentro del directorio public del backend.</li>
</ul><ul>
<li>Para desplegar a producción empleé Heroku mediante conexión con GitHub.</li>
<ul>
<li>Los variables de entorno s eestablecen en el dashboard de HEROKU: DATABASE_URL y TOKEN_SECRET.</li>
</ul>
</ul><h2>Project Status</h2>
<hr><p>Completed</p>
</ul><h2>GitHub repo</h2>
<hr><p>https://github.com/bryanPEREZ1497/pokepi</p>
</ul><h2>Production link</h2>
<hr><p>https://pokeapi-expressjs.herokuapp.com/</p>
</ul><h2>Documentation link</h2>
<hr><p>https://pokeapi-expressjs.herokuapp.com/api/v1/docs/</p>
</ul><h2>El diagrama ERD dentro del proyecto</h2>

