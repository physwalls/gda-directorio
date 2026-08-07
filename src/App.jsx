import { gdaRoster } from "./data/gdaRoster";
import { CharacterCard } from "./components/CharacterCard";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Base de Datos GDA</h1>
      <p>Nivel de Autorización: Máximo</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {gdaRoster.map((character) => (
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
