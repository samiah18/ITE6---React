import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const members = [
    {
      name: "Victor Mel Villanueva",
      image: "/images/victor.jpg"
    },
    {
      name: "Kristine Nicole Lanada",
      image: "/images/kristine.jpg"
    },
    {
      name: "Mia Rose Gabrielle Ocenar",
      image: "/images/mia.jpg"
    },
    {
      name: "Rosamia Caspe",
      image: "/images/rosamia.jpg"
    },
  ];

  const activities = [
    {
      title: "Activity 1",
      description: "Introduction to React Components",
      emoji: "💻",
      link: "/activity1",
    },
    {
      title: "Activity 2",
      description: "React Hooks and Conditional Rendering. ",
      emoji: "⚡",
      link: "/activity2",
    },
    {
      title: "Activity 3",
      description: "Displays music from JSON file using React Hooks.",
      emoji: "🎵",
      link: "/activity3",
    },
    {
      title: "Activity 4",
      description: "Online Music API Integration",
      emoji: "🔥",
      link: "/activity4",
    },
  ];

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Application Development & Emerging Technologies</h2>

        <div className="nav-links">
          <a href="#members">Members</a>
          <a href="#activities">Activities</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>🚀 ITE 6 - Major Course Output</h1>

        <p>
          A compilation of all activities. 
        </p>

        <div className="subject-info">
          <span>Subject: ITE 6 - Application Development & Emerging Technologies</span>
        </div>

        <div className="subject-info">
          <span>Instructor: Mr. Charl Alvarado</span>
        </div>
      </section>

      {/* Members Section */}
      <section className="members-section" id="members">
        <h2>👥 Team Members</h2>

        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
              </div>

              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section" id="activities">
        <h2>📂 Activities</h2>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
              <div className="activity-emoji">{activity.emoji}</div>

              <h3>{activity.title}</h3>

              <p>{activity.description}</p>

              <Link to={activity.link}>
                <button className="open-btn">Open Activity</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Application Development MCO</p>
      </footer>
    </div>
  );
}

export default LandingPage;