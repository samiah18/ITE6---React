import "./Activity3.css";
import MusicList from "../../../components/MusicList";
import { Link, useNavigate } from "react-router-dom";

function Activity3() {
  const navigate = useNavigate();

  return (
    <div className="activity3-container">
      {/* Header */}
      <header className="header">
        <h1>🎵 Music Playlist</h1>
        <p>Explore our songs</p>
      </header>

      {/* Music List */}
      <MusicList />

      {/* Navigation */}
      <div className="nav-container">
        <Link to="/activity4">
          <button className="nav-btn">Go to Activity 4</button>
        </Link>
      </div>

            {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}

export default Activity3;