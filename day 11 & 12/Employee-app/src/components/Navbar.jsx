import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="topbar">
      <h2>Employee Management System</h2>

      <div className="profile">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search employee..."
          />
        </div>

        <FaBell className="icon" />

        <div className="user">
          <FaUserCircle className="user-icon" />
          <div>
            <h4>Admin</h4>
            <p>HR Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;