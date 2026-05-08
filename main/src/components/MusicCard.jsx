import { useState } from "react";

function MusicCard({ title, artist, image, description }) {
  const [hovered, setHovered] = useState(false);

  return (
  <div
    style={{
      ...styles.card,
      ...(hovered ? styles.cardHover : {})
    }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {/* Image + overlay */}
    <div style={{ position: "relative" }}>
      <img src={image} alt={title} style={styles.image} />

      {hovered && (
        <div style={styles.overlay}>
          <p style={styles.overlayText}>{description}</p>
        </div>
      )}
    </div>

    {/* Title */}
    <h3 style={{ color: hovered ? "#1db954" : "white", margin: "10px 0 5px" }}>
      {title}
    </h3>

    <p style={{ color: "#b3b3b3", fontSize: "0.9rem" }}>
      <strong>{artist}</strong>
    </p>
  </div>
  );
}

const styles = {
  card: {
    width: "220px",
    padding: "12px",
    borderRadius: "15px",
    background: "#1e1e1e",
    color: "white",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
  },
  cardHover: {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.8)"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",     
    textAlign: "center",
    backdropFilter: "blur(2px)"      
  },

  overlayText: {
   fontSize: "0.95rem",
   color: "#e0e0e0",
   lineHeight: "1.4",
   fontStyle: "italic",
   textShadow: "0 2px 8px rgba(0,0,0,0.8)"
  },

  description: {
   fontSize: "0.9rem",
   opacity: 0.8
  }
};

export default MusicCard;