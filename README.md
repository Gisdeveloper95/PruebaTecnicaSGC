# Prueba Técnica Explora 2025 - Aplicación de Contador

## Descripción del Proyecto

Este proyecto implementa una aplicación completa (frontend + backend) para gestionar un contador. El usuario puede incrementar, decrementar y reiniciar el contador a través de una interfaz web, y el valor del contador se almacena en memoria en el servidor.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **Backend**: API REST implementada con Spring Boot y Java 8
- **Frontend**: Interfaz de usuario implementada con Angular 16.2.12

## Tecnologías Utilizadas

### Backend
- Java 8 (JDK 1.8.0_442)
- Spring Boot
- Arquitectura Limpia
- Principios SOLID

### Frontend
- Angular 16.2.12
- TypeScript
- HTML/CSS

## Requisitos Previos para Ejecución

- JDK 8 (JDK 1.8.0_442)
- Node.js y npm
- Angular CLI 16.2.12

## Instrucciones de Instalación y Ejecución
Puedes ejecutar los Instaladores que he creado para facilitarte el proceso o bien lo puedes hacer manualmente.

Recuerda que para que funcione la app debes tener Instalado Node js 21. + Java 8 (JDK 1.8.0_442) + maven 3.9.9 (preferiblemente) en el path de variables de entorno.

### Backend

1. Navegar a la carpeta del backend:
   
   cd Backend
   

2. Compilar y ejecutar:
   (requieres tener maven en el path de tu equipo, descargar mvn de https://maven.apache.org/download.cgi)
   mvn clean install
   mvn spring-boot:run
   
   

3. El servidor estará disponible en `http://localhost:8080`

### Frontend

1. Navegar a la carpeta del frontend:
   
   cd Frontend
   

2. Instalar dependencias:
   
   npm install
   npm install -g @angular/cli@16.2.12 (Instalacion de Angular)
   

3. Ejecutar la aplicación:
   
   ng serve
   

4. Acceder a la aplicación en `http://localhost:4200`


Att Andres Felipe Osorio
soriano2020s@gmail.com