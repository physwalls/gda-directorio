import "./CharacterCard.css";

const imageStyle = {
  width: "100%",
  maxHeight: "200px",
  objectFit: "cover",
  borderRadius: "4px",
  marginBottom: "12px",
};

const titleStyle = {
  color: "#d9534f",
  marginTop: "0",
  fontSize: "1.4rem",
};

export const CharacterCard = ({
  name,
  heroName,
  status,
  threatLevel,
  imageUrl,
}) => {
  return (
    <div className="character-card">
      <img src={imageUrl} alt={`Perfil de ${heroName}`} style={imageStyle} />

      <h2 style={titleStyle}>{heroName}</h2>
      <hr style={{ borderColor: "#ccc", width: "100%" }} />
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
