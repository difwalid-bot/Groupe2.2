import React, { useState } from "react";
import "./SideNav.css";
import { FaChartBar, FaClinicMedical, FaUserShield, FaCog } from "react-icons/fa";

function SideNav({ setPage, currentPage }) {
  const [expanded, setExpanded] = useState(true);

  const menu = [
    { key: "dashboard", icon: <FaChartBar />, label: "Dashboard" },
    { key: "cabinets", icon: <FaClinicMedical />, label: "Gestion des Cabinets" },
    { key: "admins", icon: <FaUserShield />, label: "Gestion des Admins" },
    { key: "settings", icon: <FaCog />, label: "Paramètres" },
  ];

  return (
    <nav className={`sidenav ${expanded ? "expanded" : ""}`}>
      <div className="sidenav-header">
        <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
          ☰
        </button>
        {expanded && <h1 className="brand">Super Admin</h1>}
      </div>

      <ul className="sidenav-menu">
        {menu.map((item) => (
          <li
            key={item.key}
            className={`menu-item ${currentPage === item.key ? "active" : ""}`}
            onClick={() => setPage(item.key)}
          >
            <span className="icon">{item.icon}</span>
            {expanded && <span className="label">{item.label}</span>}
          </li>
        ))}
      </ul>

      <div className="sidenav-footer">
        <div className="avatar">SA</div>
        {expanded && (
          <div className="footer-info">
            <div className="name">Admin</div>
            <div className="role">Superuser</div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default SideNav;