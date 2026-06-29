# Stackly Frontend

Aplicación web desarrollada con React para consultar, buscar y administrar herramientas SaaS consumiendo una API REST.

## Características

- Listado de herramientas SaaS
- Búsqueda en tiempo real
- Filtros y ordenamiento
- Vista de detalle
- Panel de administración
- Crear herramientas
- Editar herramientas
- Eliminar herramientas
- Registro de usuarios
- Inicio de sesión con JWT
- Rutas protegidas mediante loaders de React Router
- Testing básico con Vitest

---

## 🛠 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- CSS
- Fetch API
- Vitest
- Testing Library

---

## Instalación

Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:
```bash
cd frontend-proyecto-saas-catalog-josselyn-contreras
```

Instalar dependencias:
```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto utilizando como referencia el archivo `.env-example`.

### .env-example
```env
VITE_API_URL=
```

### Ejemplo local
```env
VITE_API_URL=http://localhost:3000/api
```

### Ejemplo producción
```env
VITE_API_URL=https://backend-proyecto-saas-catalog-josselyn.onrender.com/api
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:
```txt
http://localhost:5173
```

---

## Ejecutar tests

```bash
npm test
```

7 tests pasando (Vitest + Testing Library).

---

## Generar build de producción

```bash
npm run build
```

Los archivos generados se encontrarán en:
```txt
dist/
```

---

## Backend

Este proyecto consume una API REST desarrollada con:

- Node.js
- Express
- MongoDB Atlas
- JWT

La URL del backend se configura mediante:
```env
VITE_API_URL
```

---

## Estructura del proyecto

```txt
src/
│
├── components/
├── context/
├── data/
├── hooks/
├── layouts/
├── loaders/
├── pages/
├── routes/
├── services/
├── tests/
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Autenticación

La aplicación utiliza JWT.
Al iniciar sesión se almacenan:
```txt
token
user
```
en el Local Storage del navegador.

---

## Deploy

Frontend desplegado en:
```txt
https://stackly-app.netlify.app
```

Backend desplegado en:
```txt
https://backend-proyecto-saas-catalog-josselyn.onrender.com
```

---

## Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autora: Josselyn Contreras