import { useState, useRef } from "react";

function ApiMusicCard({ title, artist, image, preview }) {
  const [hovered, setHovered] = useState(false);

  const audioRef = useRef(null);

  return (
    <div
      style={{
        ...styles.card,
        ...(hovered ? styles.cardHover : {})
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);

        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }}
    >
      {/* Image */}
      <div style={{ position: "relative" }}>
        <img src={image} alt={title} style={styles.image} />

        {hovered && (
          <div style={styles.overlay}>
            <button
              style={styles.playButton}
              onClick={() => audioRef.current.play()}
            >
              ▶
            </button>
          </div>
        )}

        <audio ref={audioRef}>
          <source src={preview} type="audio/mpeg" />
        </audio>
      </div>

      {/* Song Info */}
      <h3
        style={{
          color: hovered ? "#1db954" : "#ffffff",
          margin: "14px 0 6px",
          fontSize: "1.1rem",
          fontWeight: "700",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "0.5px",
          transition: "0.3s ease"
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#b3b3b3",
          fontSize: "0.95rem",
          fontWeight: "500",
          fontFamily: "Verdana, sans-serif",
          marginBottom: "10px",
          letterSpacing: "0.3px"
        }}
      >
        {artist}
      </p>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    padding: "12px",
    borderRadius: "15px",
    background: "linear-gradient(180deg, #1f1f1f, #121212)",
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
    background: "rgba(0,0,0,0.7)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
  },

  playButton: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "none",
    background: "#1db954",
    color: "black",
    fontSize: "2rem",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
  }
};

export default ApiMusicCard;