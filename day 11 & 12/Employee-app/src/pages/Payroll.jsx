function Payroll() {
  const payrollData = [
    {
      id: "EMP001",
      name: "Rahul Kumar",
      department: "IT",
      basicSalary: 50000,
      bonus: 5000,
      deduction: 2000,
    },
    {
      id: "EMP002",
      name: "Priya Sharma",
      department: "HR",
      basicSalary: 45000,
      bonus: 3000,
      deduction: 1500,
    },
    {
      id: "EMP003",
      name: "Arjun Singh",
      department: "Finance",
      basicSalary: 55000,
      bonus: 4000,
      deduction: 2500,
    },
    {
      id: "EMP004",
      name: "Sneha Reddy",
      department: "Marketing",
      basicSalary: 48000,
      bonus: 3500,
      deduction: 1800,
    },
    {
      id: "EMP005",
      name: "Vikram Patel",
      department: "Sales",
      basicSalary: 60000,
      bonus: 6000,
      deduction: 3000,
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Payroll</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Basic Salary</th>
              <th>Bonus</th>
              <th>Deduction</th>
              <th>Net Salary</th>
            </tr>
          </thead>

          <tbody>
            {payrollData.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>₹{emp.basicSalary}</td>
                <td>₹{emp.bonus}</td>
                <td>₹{emp.deduction}</td>
                <td>
                  ₹{emp.basicSalary + emp.bonus - emp.deduction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payroll;