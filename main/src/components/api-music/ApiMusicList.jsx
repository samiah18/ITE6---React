// ApiMusicList.jsx
import "./ApiMusicList.css";
import ApiMusicCard from "./ApiMusicCard";

function ApiMusicList({ songs }) {
  return (
    <div className="music-grid">
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

export default ApiMusicList;