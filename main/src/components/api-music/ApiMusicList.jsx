import ApiMusicCard from "./ApiMusicCard";

function ApiMusicList({ songs }) {
  return (
    <div style={styles.container}>
      {songs.map((song) => (
        <ApiMusicCard
          key={song.id}
          title={song.title}
          artist={song.artist.name}
          image={song.album.cover_medium}
          preview={song.preview}
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

export default ApiMusicList;