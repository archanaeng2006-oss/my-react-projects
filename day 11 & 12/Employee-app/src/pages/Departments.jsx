function Department() {
  const departments = [
    {
      id: "D001",
      name: "Information Technology",
      head: "Rahul Kumar",
      employees: 8,
    },
    {
      id: "D002",
      name: "Human Resources",
      head: "Priya Sharma",
      employees: 5,
    },
    {
      id: "D003",
      name: "Finance",
      head: "Arjun Singh",
      employees: 6,
    },
    {
      id: "D004",
      name: "Marketing",
      head: "Sneha Reddy",
      employees: 4,
    },
    {
      id: "D005",
      name: "Sales",
      head: "Vikram Patel",
      employees: 7,
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Departments</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department Name</th>
              <th>Department Head</th>
              <th>Total Employees</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.name}</td>
                <td>{dept.head}</td>
                <td>{dept.employees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Department;