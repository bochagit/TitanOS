# TreinoSuite

**Tus alumnos organizados. Tu negocio bajo control.**

TreinoSuite es una plataforma SaaS para gimnasios, entrenadores y centros de entrenamiento que permite administrar alumnos, pagos, rutinas y métricas desde un único lugar.

Actualmente el proyecto se encuentra en etapa de desarrollo activo.

---

## Objetivos

- Gestión de gimnasios multi-tenant.
- Administración de alumnos.
- Seguimiento de pagos y vencimientos.
- Creación y asignación de rutinas.
- Panel de métricas para entrenadores.
- Personalización visual por gimnasio.
- Plataforma web responsive.
- App mobile para alumnos (visualización de rutinas, pagos, etc.).

---

## Stack Tecnológico

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Radix UI

### Backend / Infraestructura

- Supabase
- PostgreSQL
- Supabase Auth
- Row Level Security (RLS)

### Herramientas

- ESLint
- Prettier
- pnpm
- GitHub

---

## Arquitectura

```text
Next.js
    │
    ▼
Supabase Auth
    │
    ▼
PostgreSQL
```

TreinoSuite utiliza Supabase como backend principal para autenticación, almacenamiento de datos y seguridad.

---

## Modelo Multi-Tenant

Cada gimnasio funciona como un tenant independiente.

```text
Gym
 ├── Users
 ├── Students
 ├── Memberships
 ├── Payments
 └── Workouts
```

Los datos de cada gimnasio estarán aislados mediante Row Level Security (RLS).

---

## Roadmap

### Sprint 1 — Infraestructura y Auth

- [ ] Auth
- [ ] Registro
- [ ] Login
- [ ] Logout
- [ ] Middleware
- [ ] Profiles
- [ ] Gyms

### Sprint 2 — Diseño base UI

- [ ] Sidebar
- [ ] Header
- [ ] Dashboard layout
- [ ] Tema dinámico
- [ ] Sistema de colores por gimnasio
- [ ] Responsive

### Sprint 3 — CRUD de alumnos

- [ ] Tabla students
- [ ] Crear alumno
- [ ] Editar alumno
- [ ] Eliminar alumno
- [ ] Listar alumno
- [ ] Buscar alumno

### Sprint 4 — Dashboard

- [ ] Cantidad de alumnos
- [ ] Alumnos activos
- [ ] Nuevos alumnos
- [ ] Pagos del mes
- [ ] Metricas

### Sprint 5 — Pagos

- [ ] Registrar pago
- [ ] Historial
- [ ] Filtrar por alumno
- [ ] Buscar pagos

### Sprint 6 — Configuración de gimnasio

- [ ] Cambiar nombre
- [ ] Cambiar logo
- [ ] Cambiar colores
- [ ] Subida de imagenes a Supabase Storage

### Sprint 7 — Multi-tenant

- [ ] RLS a todas las tablas
- [ ] Policies
- [ ] Validaciones

### Sprint 8 — Pulido MVP

- [ ] Loading states
- [ ] Empty states
- [ ] Toasts
- [ ] Errores (pop-ups)
- [ ] Validaciones con Zod
- [ ] Mejor UI

### Sprint 9 - Feedback

- [ ] Lanzar beta cerrada y realizar correcciones

### Sprint 10 - Deploy

- [ ] Desplegar el producto final a producción

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/bochagit/TreinoSuite.git
cd TreinoSuite
```

Instalar dependencias:

```bash
pnpm install
```

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Ejecutar en desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

## Estructura del Proyecto

```text
src/
├── app/
├── components/
├── lib/
│   └── supabase/
├── features/
├── hooks/
├── types/
└── utils/
```

---

## Marca

**TreinoSuite**

_"Tus alumnos organizados. Tu negocio bajo control."_

---

## Licencia

Copyright © 2026 TreinoSuite

Todos los derechos reservados.

Este repositorio se publica únicamente con fines de visualización y seguimiento del desarrollo. No se autoriza la copia, redistribución, modificación o uso comercial del código sin autorización expresa del propietario.
