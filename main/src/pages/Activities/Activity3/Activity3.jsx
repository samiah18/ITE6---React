import "./Activity3.css";
import MusicList from "../../../components/MusicList";
import { Link } from "react-router-dom";

function Activity3() {
  return (
    <div className="activity3-container">
      <h1>🎵 My Music Playlist </h1>
      <MusicList />

      <Link to="/activity4">
        <button>Go to Activity 4</button>
      </Link>
    </div>
  );
}

export default Activity3;