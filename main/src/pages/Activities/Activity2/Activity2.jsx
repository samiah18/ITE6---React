import { useState, useEffect, useRef } from "react";
import "./Activity2.css";
import { Link, useNavigate } from "react-router-dom";

const Activity2 = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if (name.trim() !== "") {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setSubmitted(false);
    inputRef.current.focus();
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Name Greeting App</h1>
        <p>Try entering your name below</p>
      </header>

      {/* Card */}
      <div className="card">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="buttons">
          <button className="primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="secondary" onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* Greeting */}
        {submitted ? (
          <p className="greeting">Hello, {name} 👋</p>
        ) : (
          <p className="info">Please enter your name first.</p>
        )}

        {name && <p className="typed">You typed: {name}</p>}
      </div>

      {/* Navigation */}
      <div className="nav-container">
        <Link to="/activity3">
          <button className="nav-btn">Go to Activity 3</button>
        </Link>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default Activity2;