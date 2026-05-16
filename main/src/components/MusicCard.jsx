import { useState } from "react";

function MusicCard({ title, artist, image, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`music-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="image-container">
        <img src={image} alt={title} className="music-image" />

        {/* Overlay */}
        {hovered && (
          <div className="overlay">
            <p>{description}</p>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="title">{title}</h3>
      <p className="artist">{artist}</p>
    </div>
  );
}

export default MusicCard;