import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Sticky Notes</h1>
      <Link to="/note">
        <img className="img" src="assets/logo.jpg" alt="logo" />
      </Link>
      <span>click the image to start posting notes</span>
    </div>
  );
};

export default Home;
