# Proyecto pruebas unitarias con Jest

# In progress... :construction:

## Introducción
Este proyecto se realiza en el marco del **Curso de Javascript Testing con Jest**, impartido por Platzi.

En este proyecto exploramos el desarrollo de pruebas unitarias con el framework para testing, **Jest**.

## Dependencias

Requiere tener instalado Nodejs y NPM.

Instalación de Jest:

```
npm install --save-dev jest
npm install --save-dev babel-jest babel-polyfill @babel/preset-env
```

## Ejecución de las pruebas

Comando para ejecutar las pruebas.

Si se ha instalado Jest en forma global, ejecutar en consola:

`jest`

Si se ha instaldo Jest localmente, ejecutar el comando:

`./node_modules/.bin/jest`

o

`npx jest`

También puede configurar el script en el package.json:

```
"scripts": {
    "test": "jest"
},
```
Una vez implementadas las pruebas, ejecutarlas con cualquiera de estos comandos:

`npm run test`

`npm t`


Si se quiere ejecutar solo una prueba en específico:

`jest <nombre-de-la-prueba>`

## Reporte de pruebas

Para obtener un reporte que identifique los bloques de código sobre los cuáles se han realizado pruebas y sobre cuáles no, se ha configurado la caracteristica coverange. 
Para consultarla ejecutar este comando:

`npm run test:coverage`

Adicional a la información que se muestra por la terminal, se crea una carpeta en la raíz del proyecto llamada "coverage", dentro de ella se puede acceder a un archivo index.html que mostrará un reporte.


## Autor

La adaptación de los ejercicios y la documentación está realizada por Jenny Aguilar (jaguilarweb) :+1:



