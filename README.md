# Challenge API - Frontend Developer

## API

- url: `/api/items?q=query`
- Consultar la API público para traer la información o en su defecto cargar la información en una DB de libre elección para devolver los resultados.
  - Se ha elegido usar una API pública.

## SCRIPTS

- Instalación de dependencias, ejecutar script `npm install`
- Ejecutar en entorno de desarrollo, ejecutar script `npm run dev`
- Generar código para producción, ejecutar script `npm run tsc`
- Ejecutar el proyecto en entorno de producción `npm run start`

## DEPENDENCIAS

De desarrollo

- @types/express versión 4.17.14
- @types/node versión 18.7.18
- ts-node-dev versión 2.0.0
- typescript versión 4.8.3
- dotenv versión 16.0.2

Dependencias

- axios versión 0.27.2
- express versión 4.18.1

## VARIABLES DE ENTORNO

Se ha configurado Dotenv para manejar variables de entorno. El ejemplo de las variables de entorno estan en `.env.sample`

- PORT
- URI_API_EXTERNA
