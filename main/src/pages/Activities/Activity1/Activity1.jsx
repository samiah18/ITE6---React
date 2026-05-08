import React from "react";
import "./Activity1.css";
import { Link } from "react-router-dom";

const Activity1 = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header"></header>

      <Link to="/activity2">
        <button>Go to Activity 2</button>
      </Link>

      {/* Members */}
      <section className="members">
        <h2>Meet the Team</h2>
        <div className="card-container">
          <div className="card">
            <h3>Rosamia Caspe</h3>
            <p>Birthday: October 18, 2006</p>
          </div>

          <div className="card">
            <h3>Victor Mel Villanueva</h3>
            <p>Birthday: August 10, 2001</p>
          </div>

          <div className="card">
            <h3>Mia Rose Gabrielle Ocenar</h3>
            <p>Birthday: October 4, 2005</p>
          </div>

          <div className="card">
            <h3>Kristine Nicole Lañada</h3>
            <p>Birthday: September 4, 2006</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 BSIT-2B | Activity 1</p>
      </footer>
    </div>
  );
};

export default Activity1;