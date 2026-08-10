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

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        backgroundColor: "#47b2ff",
        color: "black",
        minHeight: "100vh",
      }}
    >
      <h1>Base de Datos GDA</h1>
      <p>Nivel de Autorización: Máximo</p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        <select
          value={threatFilter}
          onChange={(e) => setThreatFilter(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <option value="Todos">Todos los niveles</option>
          <option value="Medio">Medio</option>
          <option value="Alto">Alto</option>
          <option value="Nivel Viltrumita">Nivel Viltrumita</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            cursor: "pointer",
          }}
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
            backgroundColor: "#d9534f",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            marginTop: "40px",
            maxWidth: "600px",
          }}
        >
          <h2> Sin Resultados </h2>
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
