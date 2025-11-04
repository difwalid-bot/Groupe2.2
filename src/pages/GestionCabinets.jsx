import React, { useState } from "react";
import "./dashboard.css";

 function GestionCabinets() {
  const [activeTab, setActiveTab] = useState("create");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    nombreMedcin: 0,
    medcins: [],
  });

  const [cabinets] = useState([
    { id: 1, nom: "Cabinet Santé Plus", adresse: "Alger", medcins: 4 },
    { id: 2, nom: "Cabinet Ibn Sina", adresse: "Oran", medcins: 3 },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1) {
      const medcinsArr = Array.from(
        { length: Number(formData.nombreMedcin) },
        (_, i) => ({ id: i + 1, nom: "" })
      );
      setFormData({ ...formData, medcins: medcinsArr });
      setStep(2);
    }
  };

  const handleMedcinChange = (index, value) => {
    const updated = [...formData.medcins];
    updated[index].nom = value;
    setFormData({ ...formData, medcins: updated });
  };

  const progress = (step / 2) * 100;

  return (
    <div className="super-dashboard">
      <header className="page-header">
        <div>
          <h1 className="header-title">Gestion des Cabinets</h1>
          <div className="header-sep"></div>
          <p className="header-sub">Créer ou consulter les cabinets</p>
        </div>
      </header>

      {/* Submenu */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          className={`btn ${activeTab === "create" ? "primary" : ""}`}
          onClick={() => setActiveTab("create")}
        >
          ➕ Créer un cabinet
        </button>
        <button
          className={`btn ${activeTab === "view" ? "primary" : ""}`}
          onClick={() => setActiveTab("view")}
        >
          📋 Voir les cabinets
        </button>
      </div>

      {/* Créer un cabinet */}
      {activeTab === "create" && (
        <div className="recent">
          <h2 className="recent-title">Créer un nouveau cabinet</h2>

          {/* Progress bar */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "1rem",
              overflow: "hidden",
              marginBottom: "1.5rem",
              height: "10px",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background: "var(--accent)",
                height: "100%",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>

          {step === 1 && (
            <div style={{ display: "grid", gap: "1rem" }}>
              <input
                type="text"
                name="nom"
                placeholder="Nom du cabinet"
                value={formData.nom}
                onChange={handleChange}
              />
              <input
                type="text"
                name="adresse"
                placeholder="Adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
              <input
                type="number"
                name="nombreMedcin"
                placeholder="Nombre de médecins"
                value={formData.nombreMedcin}
                onChange={handleChange}
              />
              <button className="btn primary" onClick={handleNext}>
                Suivant →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Ajouter les médecins ({formData.nombreMedcin})</h3>
              {formData.medcins.map((m, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Nom du médecin ${index + 1}`}
                  value={m.nom}
                  onChange={(e) => handleMedcinChange(index, e.target.value)}
                  style={{ marginBottom: "0.6rem" }}
                />
              ))}
              <div style={{ marginTop: "1rem" }}>
                <button className="btn" onClick={() => setStep(1)}>
                  ← Retour
                </button>
                <button
                  className="btn primary"
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => alert("Cabinet créé !")}
                >
                  Terminer
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Voir les cabinets */}
      {activeTab === "view" && (
        <div className="recent">
          <h2 className="recent-title">Liste des cabinets</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "var(--text-main)",
            }}
          >
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.1)" }}>
                <th style={{ padding: "0.8rem" }}>Nom</th>
                <th>Adresse</th>
                <th>Médecins</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cabinets.map((cab) => (
                <tr
                  key={cab.id}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                  }}
                >
                  <td style={{ padding: "0.8rem" }}>{cab.nom}</td>
                  <td>{cab.adresse}</td>
                  <td>{cab.medcins}</td>
                  <td>
                    <button className="btn">Modifier</button>{" "}
                    <button className="btn">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GestionCabinets;