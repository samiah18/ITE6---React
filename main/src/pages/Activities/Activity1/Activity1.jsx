import React from "react";
import "./Activity1.css";
import { Link } from "react-router-dom";

const Activity1 = () => {
  const members = [
    { name: "Rosamia Caspe", birthday: "October 18, 2006", initials: "RC" },
    { name: "Victor Mel Villanueva", birthday: "August 10, 2001", initials: "VV" },
    { name: "Mia Rose Gabrielle Ocenar", birthday: "October 4, 2005", initials: "MO" },
    { name: "Kristine Nicole Lañada", birthday: "September 4, 2006", initials: "KL" }
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Activity 1</h1>
        <p>Simple Landing Page</p>
      </header>

      {/* Members */}
      <section className="members">
        <h2>Meet the Team</h2>

        <div className="card-container">
          {members.map((member, index) => (
            <div className="card" key={index}>
              <div className="avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <p>Birthday: {member.birthday}</p>
            </div>
          ))}
        </div>

        {/* Navigation — now OUTSIDE card-container */}
        <div className="nav-container">
          <Link to="/activity2">
            <button className="nav-btn">Go to Activity 2</button>
          </Link>
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>
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