import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserPlus,
  FaBuilding,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>EMS</h2>
        <p>Employee Management</p>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard">
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/employees">
            <FaUsers /> Employees
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-employee">
            <FaUserPlus /> Add Employee
          </NavLink>
        </li>

        <li>
          <NavLink to="/departments">
            <FaBuilding /> Departments
          </NavLink>
        </li>

        <li>
          <NavLink to="/attendance">
            <FaCalendarCheck /> Attendance
          </NavLink>
        </li>

        <li>
          <NavLink to="/payroll">
            <FaMoneyCheckAlt /> Payroll
          </NavLink>
        </li>

        <li>
          <NavLink to="/reports">
            <FaChartBar /> Reports
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog /> Settings
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <FaSignOutAlt /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;