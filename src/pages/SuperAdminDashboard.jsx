import React, { useState } from "react";
import "./dashboard.css";

 function SuperAdminDashboard() {
  const [counts, setCounts] = useState({
    cabinets: 18,
    admins: 6,
    comptes: 72,
  });

  const recentActions = [
    "Ajout d’un nouveau cabinet médical : Santé Plus",
    "Création du compte admin : Dr. Karim",
    "Mise à jour du profil du cabinet Ibn Sina",
    "Suppression d’un compte inactif",
  ];

  const [loading, setLoading] = useState(false);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      setCounts({
        cabinets: counts.cabinets + Math.floor(Math.random() * 3),
        admins: counts.admins + Math.floor(Math.random() * 2),
        comptes: counts.comptes + Math.floor(Math.random() * 5),
      });
      setLoading(false);
    }, 800);
  };

  return (
    <section className="super-dashboard fade-in">
      {/* Header */}
      <header className="page-header">
        <div>
          <h1 className="header-title">Tableau de bord</h1>
          <p className="header-sub">Vue d’ensemble de l’activité</p>
        </div>
        <button className="btn" onClick={refresh} disabled={loading}>
          {loading ? "Actualisation..." : "🔄 Actualiser"}
        </button>
      </header>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="card">
          <div className="card-title">Nombre de Cabinets</div>
          <div className="card-count">{counts.cabinets}</div>
          <div className="card-sub">Cabinets médicaux enregistrés</div>
        </div>

        <div className="card">
          <div className="card-title">Nombre d’Admins</div>
          <div className="card-count">{counts.admins}</div>
          <div className="card-sub">Administrateurs actifs</div>
        </div>

        <div className="card">
          <div className="card-title">Comptes créés</div>
          <div className="card-count">{counts.comptes}</div>
          <div className="card-sub">Utilisateurs / patients</div>
        </div>

        <div className="card">
          <div className="card-title">Dernières Actions</div>
          <div className="card-sub">
            <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
              {recentActions.map((action, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "8px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    fontSize: "0.9rem",
                  }}
                >
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SuperAdminDashboard;