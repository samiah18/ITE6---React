import { useEffect, useState } from "react";
import "./Activity4.css";
import ApiMusicList from "../../../components/api-music/ApiMusicList";

function Activity4() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      <h1>🎵 Online Music Playlist</h1>

      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
      </div>
      )}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <ApiMusicList songs={songs} />
      )}
    </div>
  );
}

export default Activity4;