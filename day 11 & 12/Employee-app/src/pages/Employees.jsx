import { useState } from "react";

function Employees() {
  const [employees, setEmployees] = useState([
  { id: "EMP001", name: "Rahul Kumar", department: "IT", designation: "Software Engineer", salary: 50000, status: "Active" },
  { id: "EMP002", name: "Priya Sharma", department: "HR", designation: "HR Executive", salary: 45000, status: "Active" },
  { id: "EMP003", name: "Arjun Singh", department: "Finance", designation: "Accountant", salary: 55000, status: "Inactive" },
  { id: "EMP004", name: "Sneha Reddy", department: "Marketing", designation: "Marketing Executive", salary: 48000, status: "Active" },
  { id: "EMP005", name: "Vikram Patel", department: "Sales", designation: "Sales Manager", salary: 60000, status: "Active" },
  { id: "EMP006", name: "Anjali Verma", department: "IT", designation: "Frontend Developer", salary: 52000, status: "Active" },
  { id: "EMP007", name: "Karan Mehta", department: "Finance", designation: "Financial Analyst", salary: 58000, status: "Active" },
  { id: "EMP008", name: "Pooja Nair", department: "HR", designation: "Recruiter", salary: 43000, status: "Active" },
  { id: "EMP009", name: "Rohit Sharma", department: "Marketing", designation: "SEO Specialist", salary: 47000, status: "Inactive" },
  { id: "EMP010", name: "Neha Singh", department: "Sales", designation: "Sales Executive", salary: 44000, status: "Active" },
  { id: "EMP011", name: "Amit Joshi", department: "IT", designation: "Backend Developer", salary: 65000, status: "Active" },
  { id: "EMP012", name: "Divya Patel", department: "Finance", designation: "Accounts Executive", salary: 49000, status: "Active" },
  { id: "EMP013", name: "Manoj Kumar", department: "HR", designation: "HR Manager", salary: 70000, status: "Active" },
  { id: "EMP014", name: "Kavya Reddy", department: "Marketing", designation: "Content Writer", salary: 46000, status: "Active" },
  { id: "EMP015", name: "Suresh Babu", department: "Sales", designation: "Sales Officer", salary: 42000, status: "Inactive" },
  { id: "EMP016", name: "Nisha Gupta", department: "IT", designation: "UI/UX Designer", salary: 55000, status: "Active" },
  { id: "EMP017", name: "Harish Kumar", department: "Finance", designation: "Auditor", salary: 61000, status: "Active" },
  { id: "EMP018", name: "Meera Iyer", department: "HR", designation: "Training Executive", salary: 48000, status: "Active" },
  { id: "EMP019", name: "Ajay Raj", department: "Marketing", designation: "Digital Marketer", salary: 51000, status: "Active" },
  { id: "EMP020", name: "Lakshmi Devi", department: "Sales", designation: "Sales Coordinator", salary: 45000, status: "Active" }
]);

  const [search, setSearch] = useState("");

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1 className="page-title">Employees</h1>

      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>₹{emp.salary}</td>
                <td>{emp.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;