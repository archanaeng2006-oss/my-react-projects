import { useState } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    company: "ABC Technologies",
    admin: "Admin",
    email: "admin@abctech.com",
    theme: "Light",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully!");
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
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#0d6efd" }}>
          System Settings
        </h2>

        <form onSubmit={handleSave}>
          <div style={{ marginBottom: "15px" }}>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={settings.company}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Admin Name</label>
            <input
              type="text"
              name="admin"
              value={settings.admin}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Theme</label>
            <select
              name="theme"
              value={settings.theme}
              onChange={handleChange}
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              &nbsp;Enable Notifications
            </label>
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
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;