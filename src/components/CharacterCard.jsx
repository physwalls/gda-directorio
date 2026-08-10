import "./CharacterCard.css";

export const CharacterCard = ({
  name,
  heroName,
  status,
  threatLevel,
  imageUrl,
}) => {
  return (
    <div className="character-card">
      <img src={imageUrl} alt={`Perfil de ${heroName}`} />

      <h2>{heroName}</h2>
      <hr />
      <p>
        <strong>Identidad Real:</strong> {name}
      </p>
      <p>
        <strong>Estado:</strong> {status}
      </p>
      <p>
        <strong>Nivel de Amenaza:</strong> {threatLevel}
      </p>
    </div>
  );
};
