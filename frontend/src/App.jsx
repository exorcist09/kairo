import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import DashBoard from "./Pages/DashBoard";
import WorkSpace from "./Pages/WorkSpace";
import History from "./Pages/History";
import Profile from "./Pages/Profile";
import Editor from "./Editor/Editor";
import Auth from "./auth/Auth";

function App() {
  const location = useLocation();
  const hideSidebarRoutes = ["/workspaces/editor", "/login"];
  const isSidebarVisible = !hideSidebarRoutes.includes(location.pathname);

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const RequireAuth = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {isSidebarVisible && (
        <div className=" w-64 md:w-72 overflow-y-auto">
          <Sidebar />
        </div>
      )}
      {/* overflow-y-auto for this dive will make this div to have scroll bar only when the content crosses the screen */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/login" element={<Auth />} />
          {/* Protected Routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/workspace/editor/:id" element={<Editor />} />
        </Routes>
      </div>{" "}
    </div>
  );
}

export default App;
