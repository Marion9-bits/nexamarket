NexaMarket is a production-style marketplace application built with Vue 3. It demonstrates scalable frontend architecture, role-based access control, composable logic patterns, and clean state management using Pinia.

This project focuses on writing maintainable, real-world code rather than just building UI screens.

---

Tech Stack

- Vue 3 (Composition API)
- Pinia (State Management)
- Vue Router (with route guards)
- Tailwind CSS
- Axios (API layer)

---

Features

Authentication & Access Control

- Mock authentication system
- Role-based access (Admin / User)
- Protected routes using navigation guards
- Admin-only dashboard

Product System

- Fetch products from external API
- Search functionality (real-time filtering)
- Pagination ("Load More" pattern)
- Loading and error state handling

Architecture & Code Quality

- Composable functions ("useAuth", "useProducts")
- Centralised API service layer
- Reusable UI components (BaseButton, inputs)
- Clean folder structure for scalability
- Separation of concerns (views, components, services, store)

---

Project Structure

src/
 ├── components/
 │   ├── ui/
 │   └── layout/
 ├── views/
 ├── store/
 ├── composables/
 ├── services/
 ├── router/
 └── utils/

---

Getting Started

Install dependencies

npm install

Run development server

npm run dev

---

Demo Login

Use any email to log in.

For admin access:

admin@mail.com

---

Key Concepts Demonstrated

- Scalable frontend architecture
- State management patterns with Pinia
- Route protection and role-based navigation
- Reusable and modular component design
- API abstraction and error handling

---

Future Improvements

- Integrate Firebase or Node.js backend for real authentication
- Add product creation and management (CRUD)
- Implement unit and integration testing
- Add deployment (Vercel / Netlify)
- Improve performance with caching and optimisation



