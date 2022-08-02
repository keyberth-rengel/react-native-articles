# Articles

Esta es una Arquitectura basica

- Async Storage
- Recoil
- React Native Bootsplash

# Run App

- Descargar el Repositorio con los archivos fuentes.
- Abrir una terminal y escribir yarn o npm install para descargar las dependencias.
- Dirigirse a la carpeta de ios y correr el comando pop install o arch -x86_64 pod install (si tienes una mac M1).
- Para correr la app en Android escribir en la terminal yarn android o npm run android.
- Para correr la app en IOS escribir en la terminal yarn ios o npm run ios.

# Screenshots

<img src='https://user-images.githubusercontent.com/45502428/151078596-33f0dadc-6a1b-49ba-b411-ac82638653e7.jpg' width="300px" />
<img src='https://user-images.githubusercontent.com/45502428/182452995-f38d736a-6a44-4278-9a00-fd80e91b9e47.jpg' width="300px" />
<img src='https://user-images.githubusercontent.com/45502428/182453010-0fab444b-2900-4f8d-942a-b574893aa46f.jpg' width="300px" />

- El proyecto cuenta con 1 vistas - Home Screen

# Flujo de la aplicacion

- (Splash Screen) Inicia un Pequeño splash con la imagen de React.

- (Home) Al iniciar la aplicacion por completo nos aparecera un lista con algunos articulos, estos articulos o
  publicaciones provienen
  de https://jsonplaceholder.typicode.com/

    - Las secciones de cada usuario, contiene por lo menos 3 publicaciones de las cuales son propietarios.
    - Contamos con un buscados, donde estaremos filtrando las publicaciones de acuerdo a su titulo.
    - Cuando se realiza un Pull Down, se realiza una nueva peticion y obtenemos datos frescos.

# Persistencia de datos

- Al iniciar por primera vez en la aplicacion haremos una peticion a la API, consultando nuevos datos.
- Con esos datos que nos regrese la API, los estaremos almacenando en el Storage de nuestro dispositivo.
- Una vez el usuario entre a la aplicacion por 2da o 3era vez, estaremos consultadon los datos ya almacenandos en el
  Storage.
- Si el dispositivo no cuenta con conexion a internet, los datos que estaremos consultando seran los de nuestro Storage,
  es si el usuario ya ha entrado a la aplicacion anteriormente.
- Si el usuario hace Pull Down, estaremos reescribiendo los datos ya existentes en el Storeage con nueva data.
