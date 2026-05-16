// ApiMusicCard.jsx
import { useRef, useState } from "react";
import "./ApiMusicCard.css";

function ApiMusicCard({ title, artist, image, preview }) {
  const [hovered, setHovered] = useState(false);

  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`music-card ${hovered ? "hovered" : ""}`}
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
      <div className="image-container">
        <img src={image} alt={title} className="music-image" />

        {hovered && (
          <div className="overlay">
            <button className="play-btn" onClick={playAudio}>
              ▶
            </button>
          </div>
        )}

        <audio ref={audioRef}>
          <source src={preview} type="audio/mpeg" />
        </audio>
      </div>

      {/* Text */}
      <h3 className="music-title">{title}</h3>
      <p className="music-artist">{artist}</p>
    </div>
  );
}

export default ApiMusicCard;