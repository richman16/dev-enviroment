# DEV-ENVIROMENT

## OBJETIVO

Estructura básica para proyectos web, utilizando `webpack` y `babel` para tener un entorno de desarrolllo moderno, usando características de ECMAScript 6 y modulos.

## Descripción del proyecto base - Betwitter

Para ejemplificar nuestro ambiente de desarrolllo, estaremos trabajando en un proyecto web de una plataforma símil a twitter.

## Inicializacion limpia del proyecto con NPM

```shell
$ npm init -y
```

## Dependencias de desarrollo

* `webpack`
* `webpack-cli`
* `babel/core`
* `babel-loader`
* `babel/preset-env`
* `babel/cli`
* `html-webpack-plugin` - Inserta en el HTML el archivo JavaScript generado por Webpack
* `webpack-dev-server` - Servidor de desarrollo para sincronizar los cambios

> Instalación

```shell
$ npm i -D webpack webpack-cli @babel/core babel-loader @babel/preset-env @babel/cli html-webpack-plugin webpack-dev-server
```

### [Clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)

Plugin para eliminar los bundles JS innecesarios.

```shell
$ npm i -D clean-webpack-plugin
```

## Archivos de configuración

* `webpack.config.js`
* `.babelrc`

## Ejecutar babel

```shell
$ ./node_modules/.bin/babel ./src -d ./dist
```

## Webpack

### Ejecutar webpack-dev-server 

En el archivo package.json -> accede al script con el nombre 'dev', donde se ejecuta webpack.

```shell
$ npm run dev
```

> Script de *webpack-dev-server* dentro del archivo *package.json*
```json
{
    "scripts": {
        "dev": "webpack-dev-server -w"
    }
}
```

## Ejecutar webpack

En el archivo package.json -> accede al script con el nombre 'build', donde se ejecuta webpack. Se generan los archivos en la carpeta dist, no espera cambios y puede subirse a producción.

```shell
$ npm run build
```

> Script de webpack dentro del archivo *package.json*
```json
{
    "scripts": {
        "build": "webpack"
    }
}
```


## LOG

- **Initial Commit**
    - Estructura básica
    - Configuración de babel
    - Configuración de webpack-dev-server
    - Configuración de webpack

---
Creado por [Ricardo Castillo](https://github.com/richman16)