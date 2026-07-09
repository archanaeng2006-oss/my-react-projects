import { useState } from "react";

function Attendance() {
  const [attendance] = useState([
    { id: "EMP001", name: "Rahul Kumar", status: "Present" },
    { id: "EMP002", name: "Priya Sharma", status: "Present" },
    { id: "EMP003", name: "Arjun Singh", status: "Absent" },
    { id: "EMP004", name: "Sneha Reddy", status: "Present" },
    { id: "EMP005", name: "Vikram Patel", status: "Leave" },
    { id: "EMP006", name: "Anjali Verma", status: "Present" },
    { id: "EMP007", name: "Karan Mehta", status: "Present" },
    { id: "EMP008", name: "Pooja Nair", status: "Absent" },
    { id: "EMP009", name: "Rohit Sharma", status: "Present" },
    { id: "EMP010", name: "Neha Singh", status: "Present" },
  ]);

  return (
    <div className="page">
      <h1 className="page-title">Attendance</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Attendance</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>
                  <span
                    className={
                      emp.status === "Present"
                        ? "status-active"
                        : emp.status === "Absent"
                        ? "status-inactive"
                        : ""
                    }
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;