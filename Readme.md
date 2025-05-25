
<div>
<img src="./frontend/src/assets/logo_readme.jpeg" alt="Kairo Logo" width="200"/><h2> Kairo - Job Schedular and Management Webapp</h2>
</div>

---

Kairo is a visual job scheduler built with the MERN stack and **React Flow** for an interactive flow editor. It allows users to create, manage, and visualize job sequences easily.

##  Tech Stack

- **Frontend**: React.js, Recharts, Shadcn, Radix-UI TailwindCSS, Axios
- **FlowEditor**:React-Flow, ViewPort
- **State Management**: Zustand
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication and other**: JWT (JSON Web Tokens) and Bcrypt
- **Data Structure and Algorithm Used** : Kahn Algorithm (a topological sothing algorithm used for Directed Acyclic graph) in developing the execution of the workflow

---

##  Features

-  Connect jobs using an interactive flow editor (React Flow)
-  User authentication (JWT-based login/signup)
-  User-specific data using `createdBy` fields
-  Create, edit, delete, and manage job nodes
-  Auto-save and sync with backend
-  Scalable architecture for future workflow automation


##  Getting Started

### Prerequisites

- Node.js & npm
- MongoDB installed(offline) or Atlas cluster(online)

### Setup to run locally 

#### 1. Clone the repository

```bash
git clone https://github.com/exorcist09/kairo.git
cd kairo
```
#### 2. Setup Backend
``` 
cd backend
npm install
npm run dev
```

#### 3. Setup Frontend
```
cd frontend
npm install
npm run dev
```