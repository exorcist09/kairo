<!-- #Kairo --> 

<div style="display: flex; align-items: center; gap: 20px; justify-content: center;">
  <img src="./frontend/src/assets/logo_readme.jpeg" alt="Kairo Logo" width="200"/>
  <!-- <span style="font-weight: 900; font-size: 3em;">Job Scheduler and Workflow Management WebApp</span> -->
</div>

---
Kairo is a **visual job scheduler and workflow automation web application** built using the **MERN stack** with an interactive drag-and-drop flow editor powered by **React Flow**.
It enables users to design, manage, and execute complex job sequences with an intuitive UI and scalable backend architecture.

---

##  Tech Stack To use in Future

### **Frontend**
* NextJs(TS)
* React Flow (interactive flow editor)
* Zustand (state management)
* TanStack Query
* Zod, React Hook Form
* Axios
* TailwindCSS
* Recharts

### **Backend**
* Node.js
* Express.js
* Prisma ORM
* Docker

### Unit Test
* E2E playwrite

### **Database**
* PostgreSQL (Supabase)

### **Authentication & Security**
* JWT (JSON Web Token)
* Bcrypt (Password hashing)

  ### Monitoring
  * Sentry
    ### API Documentation
    * Scalar
      ### Deployment
      * AWS
      * Github Actions

### **Algorithms & Data Structures**
* Binary-tree-based workflow execution
* Graph-based node & edge management (React Flow)

---

##  Features

*  **Visual workflow builder** with drag-and-drop job nodes
*  **Authentication system** with secure JWT-based login & signup
*  **User-specific workflows** using `createdBy` fields
*  Create, edit, delete, and configure job nodes
*  **Auto-save workflows** and real-time syncing with the backend
*  Persistent storage using MongoDB
*  Modular and scalable backend for future automation features
*  Dashboard for workflow stats (Recharts)

---

##  Folder Structure

```bash
kairo/
│
├── backend/        # Express server, controllers, routes, models
│── frontend/       # React + React Flow UI
│── README.md
│── package.json
└── ...
```

##  Local Setup & Installation

### **1. Clone the Repository**

```bash
git clone [https://github.com/exorcist09/kairo.git](https://github.com/exorcist09/kairo.git)
cd kairo
```

## 2. Backend Setup
```bash
cd backend
npm ci
npm run dev

setup
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 3. Frontend setup
```bash
cd frontend
npm ci
npm run dev

setup
VITE_BACKEND_URL=http://localhost:5000
```
