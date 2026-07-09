const Dashboard = () => {
  return (
    <div>

      <h1 className="page-title">Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="cards">

        <div className="card">
          <h3>Total Employees</h3>
          <h1>20</h1>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <h1>18</h1>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <h1>5</h1>
        </div>

        <div className="card">
          <h3>Total Payroll</h3>
          <h1>₹12,50,000</h1>
        </div>

      </div>

      {/* Recent Employees */}
      <div className="table-container">
        <h2 style={{ marginBottom: "20px" }}>Recent Employees</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>EMP001</td>
              <td>Rahul Kumar</td>
              <td>IT</td>
              <td>Software Engineer</td>
              <td className="status-active">Active</td>
            </tr>

            <tr>
              <td>EMP002</td>
              <td>Priya Sharma</td>
              <td>HR</td>
              <td>HR Executive</td>
              <td className="status-active">Active</td>
            </tr>

            <tr>
              <td>EMP003</td>
              <td>Arjun Singh</td>
              <td>Finance</td>
              <td>Accountant</td>
              <td className="status-active">Active</td>
            </tr>

            <tr>
              <td>EMP004</td>
              <td>Sneha Reddy</td>
              <td>Marketing</td>
              <td>Marketing Executive</td>
              <td className="status-inactive">Inactive</td>
            </tr>

            <tr>
              <td>EMP005</td>
              <td>Vikram Patel</td>
              <td>Sales</td>
              <td>Sales Manager</td>
              <td className="status-active">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;