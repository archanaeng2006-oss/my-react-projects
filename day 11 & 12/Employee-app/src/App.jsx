import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import "./App.css";

function Layout({ children }) {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <div className="page">{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Employees */}
      <Route
        path="/employees"
        element={
          <Layout>
            <Employees />
          </Layout>
        }
      />

      {/* Add Employee */}
      <Route
        path="/add-employee"
        element={
          <Layout>
            <AddEmployee />
          </Layout>
        }
      />

      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <Layout>
            <Attendance />
          </Layout>
        }
      />

      {/* Payroll */}
      <Route
        path="/payroll"
        element={
          <Layout>
            <Payroll />
          </Layout>
        }
      />

      {/* Departments */}
      <Route
        path="/departments"
        element={
          <Layout>
            <Departments />
          </Layout>
        }
      />
      {/* Reports */}
      <Route
        path="/reports"
        element={
          <Layout>
            <Reports />
          </Layout>
        }
      />
      {/* Settings */}
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;