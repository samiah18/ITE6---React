import { useState, useEffect } from "react";
import MusicCard from "./MusicCard";

function MusicList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/music.json")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading music...</h2>;
  }

  return (
    <div className="music-grid">
      {songs.map((song) => (
        <MusicCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          image={song.image}
          description={song.description}
        />
      ))}
    </div>
  );
}

export default MusicList;