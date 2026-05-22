# Investigación React Native

## ¿Qué es React Native?

React Native es un framework de código abierto que permite desarrollar aplicaciones móviles nativas usando JavaScript y React. Con React Native se pueden crear aplicaciones para Android, iOS y otras plataformas, reutilizando gran parte del código y usando componentes nativos como `View`, `Text` e `Image`. :contentReference[oaicite:0]{index=0}

## Buenas prácticas

- Organizar el proyecto por carpetas.
- Usar nombres claros para variables, componentes y archivos.
- Separar componentes reutilizables.
- Mantener el código limpio y fácil de leer.
- Evitar repetir código innecesariamente.
- Usar `const` cuando el valor no va a cambiar.
- Separar estilos usando `StyleSheet`.
- Probar la app en diferentes tamaños de pantalla.

## Estructura de proyecto

```txt
MiProyecto/
│
├── App.js
├── package.json
├── node_modules/
│
├── src/
│   ├── components/
│   ├── screens/
│   ├── assets/
│   ├── styles/
│   └── utils/

Descripción
App.js: archivo principal de la aplicación.
components/: componentes reutilizables.
screens/: pantallas principales de la app.
assets/: imágenes, íconos o recursos.
styles/: archivos de estilos.
utils/: funciones auxiliares.
Tipos de datos

En React Native se pueden usar diferentes tipos de datos de JavaScript, como:

String: texto.
Number: números.
Boolean: verdadero o falso.
Array: lista de datos.
Object: conjunto de datos relacionados.

Ejemplos:
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const nombre = "Gerardo";
  const edad = 20;
  const activo = true;
  const tecnologias = ["React Native", "JavaScript", "Expo"];
  const usuario = {
    carrera: "Ingeniería en Sistemas",
    cuatrimestre: 6
  };

  return (
    <View>
      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text>
      <Text>Activo: {activo ? "Sí" : "No"}</Text>
      <Text>Tecnología: {tecnologias[0]}</Text>
      <Text>Carrera: {usuario.carrera}</Text>
      <Text>Cuatrimestre: {usuario.cuatrimestre}</Text>
    </View>
  );
}