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

También puede configurar el script en el package.json:

```
"scripts": {
    "test": "jest"
},
```
Una vez implementadas las pruebas ejecutarlas con cualquiera de estos 2 comandos:

`npm run test`
`npm t`

Si se quiere ejecutar solo una prueba en específico:

`jest <nombre-de-la-prueba>`

## Autor

La adaptación de los ejercicios y la documentación está realizada por Jenny Aguilar (jaguilarweb) :+1:



