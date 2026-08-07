const cardStyle = {
  border: "2px solid #222",
  padding: "16px",
  margin: "10px",
  borderRadius: "8px",
  width: "250px",
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#333",
};

const imageStyle = {
  width: "100%",
  maxHeight: "180px",
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
    <div style={cardStyle}>
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
