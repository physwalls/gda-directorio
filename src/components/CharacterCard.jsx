export const CharacterCard = ({
  name,
  heroName,
  status,
  threatLevel,
  imageUrl,
}) => {
  return (
    <div
      style={{
        border: "2px solid #222",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={imageUrl}
        alt={`Fotografía de archivo de ${heroName}`}
        style={{ width: "100%", borderRadius: "4px", marginBottom: "12px" }}
      />

      <h2 style={{ color: "#d9534f", marginTop: "0" }}>{heroName}</h2>
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
