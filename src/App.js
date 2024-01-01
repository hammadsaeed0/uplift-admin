import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import UserManagement from "./screens/userManagement";
import SupporterManagement from "./screens/SupporterManagement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./screens/Login";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user_management" element={<UserManagement />} />
        <Route path="/supporter_management" element={<SupporterManagement />} />
      </Routes>
    </>
  );
}

export default App;
