import { useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav.jsx";
import SuperAdminDashboard from "./pages/SuperAdminDashboard.jsx";
import GestionCabinets from "./pages/GestionCabinets.jsx";
import GestionAdmins from "./pages/GestionAdmins.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  // choose which page to render
  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <SuperAdminDashboard />;
      case "cabinets":
        return <GestionCabinets />;
      case "admins":
        return <GestionAdmins />;
      default:
        return <SuperAdminDashboard />;
    }
  };

return (
  <div className="app-layout">
    <SideNav setPage={setPage} currentPage={page} />
    <main className="super-dashboard">{renderPage()}</main>
  </div>
);

}
