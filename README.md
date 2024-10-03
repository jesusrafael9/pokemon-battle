# Pokémon Battle App

Pokémon Battle App es una aplicación web desarrollada con React, TypeScript y Redux que permite visualizar una lista de Pokémon, ver sus detalles y seleccionar hasta seis Pokémon para un combate.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Uso](#uso)
- [Tecnologías](#tecnologías)

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior) o [Yarn](https://yarnpkg.com/)

Puedes verificar las versiones instaladas ejecutando:

```bash
node -v
npm -v
```

## Instalación

Para instalar las dependencias del proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

```bash
   git clone https://github.com/jesusrafael9/pokemon-battle.git
```
2. Navega al directorio del proyecto:

```bash
   cd pokemon-battle
```
3. Instala las dependencias necesarias:
```bash
   npm install
```
## Ejecución

Para ejecutar la aplicación localmente en modo desarrollo, usa el siguiente comando:
```bash
   npm start
```
La aplicación se abrirá en tu navegador en http://localhost:3000.

## Uso

La aplicación permite:

1. Buscar Pokémon por su nombre o número.
2. Ver los detalles de un Pokémon seleccionado (altura, tipo, estadísticas de combate).
3. Agregar hasta seis Pokémon a la lista de combate.
4. Ver y eliminar Pokémon de la lista de combate.


## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- [React](https://reactjs.org/) - Biblioteca de interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación tipado
- [Redux](https://redux.js.org/) - Manejador de estado global
- [PokeAPI](https://pokeapi.co/) - API pública para obtener información sobre Pokémon
