import { useState } from "react";
import { gdaRoster } from "./data/gdaRoster";
import { CharacterCard } from "./components/CharacterCard";

export default function App() {
  const [roster, setRoster] = useState(gdaRoster);

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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {roster.map((character) => (
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
    </div>
  );
}
