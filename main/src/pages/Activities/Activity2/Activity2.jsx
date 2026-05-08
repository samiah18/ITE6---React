import { useState, useEffect, useRef } from "react";
import "./Activity2.css";
import { Link } from "react-router-dom";

const Activity2 = () => {
  // useState
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // useRef
  const inputRef = useRef(null);

  // useEffect (runs when page loads)
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // handle submit
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // reset
  const handleReset = () => {
    setName("");
    setSubmitted(false);
    inputRef.current.focus();
  };

 
  return (
    <div className="container">
      <h1>Name Greeting App</h1>

      
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
            
      <div className="buttons">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>

       <Link to="/activity3">
        <button>Go to Activity 3</button>
       </Link>

      {/* Conditional Rendering (ternary) */}
      {submitted ? (
        <p className="greeting">Hello, {name} 👋</p>
      ) : (
        <p>Please enter your name first.</p>
      )}

      {/* Logical operator */}
      {name && <p>You typed: {name}</p>}
    </div>  
  ); 
};

export default Activity2;