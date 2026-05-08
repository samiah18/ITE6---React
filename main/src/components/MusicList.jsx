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
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={styles.container}>
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

const styles = { 
  container: { 
    display: "grid", 
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "20px", 
    padding: "20px", 
    justifyItems: "center" 
  } 
};

export default MusicList;