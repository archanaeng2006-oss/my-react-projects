function Reports() {
  const reports = [
    {
      id: "R001",
      title: "Monthly Attendance Report",
      date: "01-07-2026",
      status: "Completed",
    },
    {
      id: "R002",
      title: "Employee Salary Report",
      date: "03-07-2026",
      status: "Completed",
    },
    {
      id: "R003",
      title: "Department Performance",
      date: "05-07-2026",
      status: "Pending",
    },
    {
      id: "R004",
      title: "Employee Leave Report",
      date: "07-07-2026",
      status: "Completed",
    },
    {
      id: "R005",
      title: "Annual Employee Summary",
      date: "09-07-2026",
      status: "Pending",
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">Reports</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Report Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.title}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;