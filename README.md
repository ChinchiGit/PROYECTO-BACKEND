
### Smile Cinema 📽️

Se trata de un proyecto para poner en práctica los conocimientos adquiridos en tecnologías de Backend por parte de tres estudiantes del Bootcamp de Desarrollo Web Fullstack que se imparte en The Bridge. Se ha realizado conforme a las siguientes instrucciones:

[Instrucciones Ejercicio](https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_sep23_MAD/blob/master/teoria/back/movies.md)

### Autores: 
    
- Julia Isasti [@juliaisasti](https://github.com/juliaisasti)
- Pedro Javier Miranda Tejada [@javirs200](https://github.com/javirs200)
- Carlos Chinchilla [@chinchigit](https://github.com/ChinchiGit)

Fecha: 2023-11-22

## Descripción



Este proyecto consiste en el desarrollo de una aplicación web de búsqueda y gestión de películas. Cumple con los siguientes requisitos:

1. Dos **roles de usuario**: Usuario y Administrador.
2. Almacenamiento de los datos de los usuarios en una **base de datos relacional (SQL)**.
3. Consumo y muestra de los datos de las películas desde dos fuentes: una **API externa (OMDB**) y una **base de datos propia (MongoDB)**.
4. Aplicación de **técnicas de web scraping** para obtener opiniones de los espectadores.
5. Desarrollo de una aplicación **mobile-first** y de tipo **Server Side Rendering** (SSR).


### Endpoints

Los endpoints de la aplicación son los siguientes:

- `/`
    - Vista de inicio de la aplicación.
    - Buscador que pueden usar tanto usuarios registrados como no registrados.

- `/signup`

    - Vista de formulario de registro de la aplicación.
    - Formulario con los campos: nombre, email y contraseña.
    - Alternativa de identificación mediante Google.

- `/login`

    - Validación de credenciales.
    - Apertura de sesión.
    - Redirección a /dashboard si es Usuario, o /movies si es Administrador.

- `/logout`
    - Cierre de sesión.
    - Redirección a /.

- `/search`
    - Buscador de películas por título.
    - Resultados de búsqueda con la siguiente información:

- `/search/:id`

    Vista detalle de la película buscada con la siguiente información:
    - Título completo
    - Imagen representativa
    - Año
    - Director
    - Género
    - Duración
    - Sinopsis
    - Actores
    - Rating
    - Opiniones de espectadores reales
    - Botón de Añadir a Mis películas 

- `/movies`

    Vista de las películas del Usuario, pues solo está disponible para **usuarios autenticados**.
    - Listado de las películas que el Usuario añadió a la BBDD a través del buscador.
    - Misma información adicional de cada una de ellas en vista dedalle (/search/:id)


Los siguientes enpoints solos están disponibles para el **rol de Admin**.

- `/createMovie`
Formulario para crear una nueva película con los mismos campos que se ofrecen en la vista detalle (`/search/:id`): 


- `/editMovie/:id`
Formulario para editar una película existente.

- `/removeMovie`
Eliminación de una película.



Las **opiniones de espectadores** reales se obtienen mediante **SCRAPING** a partir de [Interner Movie Database](https://www.imdb.com/)


## Desarrollo

La aplicación se ha desarrollado utilizando las siguientes **tecnologías**:

- Frontend: PUG - Server Side Rendering
- Backend: Node.js, Express
- Dependencias: Parse Cookie, Jest, JSON Web Token, Mongoose, Passport, Passport Google Auth, Sequelize
- Base de datos: SQL, MongoDB
- API: OMDB
- Scraping: Puppeteer
- Deploy: Render
- Seguridad: Helmet