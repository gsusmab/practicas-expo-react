# Practica 1: Hola mundo

![Practica1](https://i.imgur.com/k1CRd5X.png)

## Objetivo

El objetivo de esta práctica es crear una aplicación que muestre un mensaje en pantalla.

## DEMO

Debido a que Expo nos permite desarrollar para Android, iOS, y Web desde la misma base de código de JavaScript se tiene disponible las siguientes opciones:

- Descargar el .APK (Requiere Android 5 o superior).
- Ver en la WEB.

## Tabla de contenidos

- [Tecnologías utilizadas](#tecnolog-as-utilizadas)
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalaci-n)
- [Ejecución](#ejecuci-n)
- [Proceso de desarrollo](#proceso-de-desarrollo)
  - [Practica1](#practica1)

## Tecnologías utilizadas

- TypeScript
- React
- React Native
- Expo

## Prerrequisitos

En caso de que requiera ejecutar y modificar la aplicación en su computadora bajo un entorno de desarrollo,  asegúrese de haber cumplido los siguientes requisitos:

- Tener instalada la última versión de Git.
- Tener instalada la última versión de NodeJS.- Tener instalada la última versión de la línea de comandos de Expo (Ver Instalación).
- Tener instalado un editor de código e.j Visual Studio Code.
- Visualizar los cambios realizados en tiempo real.
  - WEB.
    - Tener instalado un navegador web moderno.
  - Aplicación nativa.
    - Tener instalada la aplicación de Expo en su dispositivo móvil.

## Instalación

Para poder instalar la aplicación en su computadora requiere ejecutar las siguientes instrucciones en su terminal:

```
git clone https://github.com/gsusmab/tommy-store.gitcd tommy-store
git branch practica-1
npm install
```

En caso de no tener instalada la línea de comandos de Expo ejecutar siguiente instrucción en su terminal:

```
npm install expo-cli --global
```

## Ejecución

Para poder ejecutar la aplicación en su computadora asegúrese de estar dentro del directorio tommy-store en su terminal y ejecute la siguiente instrucción:

```
npm start
```

## Proceso de desarrollo

A continuación se describe el proceso de desarrollo, cada una de las pantallas y la documentación de los componentes que estas contienen.

### Practica1

Debido a el sencillo objetivo de la aplicación esta solo utiliza componentes propios de React Native: [Text](https://reactnative.dev/docs/text "Text") e [Image](https://reactnative.dev/docs/image "Image").

![Practica1: Componentes](https://i.imgur.com/H6h5C9H.png)

## Conclusion

Sin duda Expo es una muy buena opción para el desarrollo de aplicaciones multiplataforma, con ella ahorras costos, tiempo y en mi caso que tengo conocimientos previos sobre HTML, CSS, JS y React la curva de aprendizaje es muy baja.
