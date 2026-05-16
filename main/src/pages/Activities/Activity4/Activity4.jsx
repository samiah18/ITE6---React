import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Activity4.css";
import ApiMusicList from "../../../components/api-music/ApiMusicList";

function Activity4() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=top%20hits"
        );

        const data = await response.json();

        setTimeout(() => {
          setSongs(data.data.slice(0, 9));
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch music.");
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div className="activity4-container">
      {/* Header */}
      <header className="activity4-header">
        <h1>🎵 Online Music Playlist</h1>
        <p>Stream trending songs with a modern music experience</p>
      </header>

      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {/* Error */}
      {error && <h2 className="error-text">{error}</h2>}

      {/* Music List */}
      {!loading && !error && <ApiMusicList songs={songs} />}

      {/* Navigation */}
      <div className="nav-container">
        <Link to="/">
          <button className="nav-btn">Back to Landing Page</button>
        </Link>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default Activity4;