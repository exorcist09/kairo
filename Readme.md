# Kairo - Job Scheduler and Management WebApp 

Kairo is a visual job scheduler built with the MERN stack and **React Flow** for an interactive flow editor. It allows users to create, manage, and visualize job sequences easily.

##  Tech Stack

- **Frontend**: React.js, TailwindCSS, Axios
- **FlowEditor**:React Flow,
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Zustand

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
- MongoDB installed or Atlas cluster

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/exorcist09/kairo.git
cd kairo
```
#### 2. Setup Backend
``` 
cd server
npm install
npm run dev
```

#### 3. Setup Frontend
```
cd server
npm install
npm run dev
```