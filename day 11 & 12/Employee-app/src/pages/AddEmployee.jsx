import { useState } from "react";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    designation: "",
    email: "",
    phone: "",
    salary: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Employee Added Successfully!");

    console.log(employee);

    setEmployee({
      id: "",
      name: "",
      department: "",
      designation: "",
      email: "",
      phone: "",
      salary: "",
      status: "Active",
    });
  };

  return (
    <div className="page">
      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0d6efd",
            marginBottom: "25px",
          }}
        >
          Add New Employee
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Employee ID</label>
            <input
              type="text"
              name="id"
              value={employee.id}
              onChange={handleChange}
              placeholder="Enter Employee ID"
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter Employee Name"
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Department</label>
            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={handleChange}
              placeholder="Enter Designation"
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              placeholder="Enter Salary"
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Status</label>
            <select
              name="status"
              value={employee.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#0d6efd",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;