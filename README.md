# 📦 Products Frontend

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![RTK Query](https://img.shields.io/badge/RTK%20Query-593D88?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/rtk-query/overview)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/UI](https://img.shields.io/badge/shadcn/ui-black?style=flat)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🚀 Project Overview

**Products Frontend** is a modern e-commerce application built with **React, TypeScript, and Vite**, connected to a standalone backend (Express + Prisma + SQLite).

The app includes:

- Product catalog  
- Product details  
- Cart functionality  
- Authentication (JWT)  
- Search + sorting  
- **Full product CRUD: create, edit, delete**  
- Light/Dark theme  
- Responsive design  

Deployed on **Vercel**.

🔗 **Live Demo:**  
https://react-products-beta.vercel.app/

---

## ✨ Features

### 🛍️ Product Features
- View product catalog  
- Product detail page  
- Search products  
- Sorting options  
- **Create new products (authorized users only / admin)**  
- **Edit existing products**  
- **Delete products**  
- Add to cart  
- Modify quantity  
- Remove from cart  
- Auto total price calculation  

### 🧺 Cart
- Add items  
- Remove items  
- Change quantity  
- Clear cart  
- Realtime total price  

### 🔐 Authentication
- JWT register  
- JWT login  
- Protected routes  
- Auto-persist authentication with RTK Query  

### 🎨 UI / UX
- TailwindCSS styling  
- Shadcn/UI components  
- Fully responsive layout  
- Light / Dark theme switch  
- Clean, modern interface  

---

## 🧩 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React (Vite)** | Core UI Framework |
| **TypeScript** | Static typing |
| **RTK Query** | API requests & caching |
| **React Router** | Routing |
| **TailwindCSS** | Styling |
| **Shadcn/UI** | Components |
| **Context** | Theme & global state |

### Backend (External)
| Technology | Purpose |
|-----------|---------|
| Express | REST API |
| Prisma | ORM |
| SQLite | Database |
| JWT | Authentication |

---

## 📁 Project Structure

```
app/
components/
context/
features/
hooks/
layouts/
lib/
pages/
routes/
```

### Folder Description
- **app/** – App root, providers  
- **components/** – Reusable UI components  
- **context/** – Theme/auth contexts  
- **features/** – Cart, products, auth logic  
- **hooks/** – Custom hooks  
- **layouts/** – Shared page layouts  
- **lib/** – API, helpers, utils  
- **pages/** – Route pages  
- **routes/** – Routing configuration  

---

## 🖼️ Screenshots (add later)

Place images here:

```
public/screenshots/
```

Example:

```
![Home](./public/screenshots/home.png)
![Product](./public/screenshots/product.png)
![Cart](./public/screenshots/cart.png)
![Admin](./public/screenshots/admin.png)
```

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🌍 Deployment

- **Frontend:** Vercel  
- **Backend:** Render  

---

## 📌 Notes

- Ensure your `.env` contains your backend API URL.  
- Cart and theme persist via `localStorage`.  
- RTK Query provides caching and request deduplication.  

---

