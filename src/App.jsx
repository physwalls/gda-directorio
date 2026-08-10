// src/App.jsx
import { useState } from "react";
import { gdaRoster } from "./data/gdaRoster";
import { CharacterCard } from "./components/CharacterCard";

export default function App() {
  const [roster, setRoster] = useState(gdaRoster);
  const [searchTerm, setSearchTerm] = useState("");
  const [threatFilter, setThreatFilter] = useState("Todos");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filteredRoster = roster.filter((character) => {
    const matchesSearch = character.heroName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesThreat =
      threatFilter === "Todos" || character.threatLevel === threatFilter;
    const matchesStatus =
      statusFilter === "Todos" || character.status === statusFilter;
    return matchesSearch && matchesThreat && matchesStatus;
  });

  const inputStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "2px solid #0052CC",
    backgroundColor: "#1e293b",
    color: "white",
    outline: "none",
    fontSize: "1rem",
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0b132b",
        color: "#e2e8f0",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            color: "#FFC500",
            textTransform: "uppercase",
            letterSpacing: "2px",
            margin: "20px 0",
          }}
        >
          BASE DE DATOS GDA
        </h1>
        <p
          style={{
            color: "#E53935",
            fontWeight: "bold",
            letterSpacing: "1px",
            margin: "5px",
          }}
        >
          NIVEL DE AUTORIZACIÓN: MÁXIMO
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Buscar héroe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ ...inputStyle, width: "100%", maxWidth: "300px" }}
        />

        <select
          value={threatFilter}
          onChange={(e) => setThreatFilter(e.target.value)}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="Todos">Todos los niveles</option>
          <option value="Medio">Medio</option>
          <option value="Alto">Alto</option>
          <option value="Nivel Viltrumita">Nivel Viltrumita</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="Todos">Todos los estados</option>
          <option value="Activo">Activo</option>
          <option value="Desaparecido">Desaparecido</option>
          <option value="Neutralizado">Neutralizado</option>
        </select>
      </div>

      {filteredRoster.length === 0 ? (
        <div
          style={{
            backgroundColor: "rgba(229, 57, 53, 0.2)",
            border: "2px solid #E53935",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            margin: "40px auto",
            maxWidth: "600px",
          }}
        >
          <h2 style={{ color: "#E53935" }}>⚠️ ALERTA DEL SISTEMA</h2>
          <p>
            No se encontraron coincidencias en la base de datos de la GDA con
            los filtros seleccionados.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredRoster.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              heroName={character.heroName}
              status={character.status}
              threatLevel={character.threatLevel}
              imageUrl={character.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
