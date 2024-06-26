# El Buen Sabor - Dashboard

Una aplicación de E-commerce para empresas y sectores varios.

## Autores

- Alejandro Lencinas: [@raullencinas-frm-utn](https://github.com/raullencinas-frm-utn)
- Elias Santilli: [@santillielias](https://github.com/santillielias)
- Leandro Valdearenas: [@LeandroValdearenas](https://github.com/LeandroValdearenas)

## Variables de Entorno

Para correr este proyecto, se requiere hacer uso de las siguientes variables de entorno:

`VITE_API_URL` : Api del Dashboard

`VITE_IMG_API_URL` : Api de Imágenes (https://microservicio-imagenes.onrender.com)

`VITE_AUTH0_AUDIENCE` : Audience de Auth0

`VITE_AUTH0_DOMAIN` : Domain de Auth0

`VITE_AUTH0_CLIENT_ID` : Client ID de Auth0

`VITE_AUTH0_CALLBACK_URL` : Callback

`VITE_FRONT_CLIENT_URL` : Página del Buen Sabor

## Credenciales de Prueba

- SUPERADMIN: superadmin@elbuensabor.com : `DefaultPassword123!`
- ADMIN: juancitoadmin@elbuensabor.com : `DefaultPassword123!`
- CAJERO: juancitocajeres@elbuensabor.com : `DefaultPassword123!`
- COCINERO: pepitococinas@elbuensabor.com : `DefaultPassword123!`
- DELIVERY: jorgedeliveres@elbuensabor.com : `DefaultPassword123!`


## Despliegue

Para desplegar el proyecto hace falta ejecutar:

```bash
  npm run dev
```

Asegúrese de que la API del Dashboard esté siendo ejecutada: `https://github.com/LeandroValdearenas/ElBuenSabor-BackTraza5`
