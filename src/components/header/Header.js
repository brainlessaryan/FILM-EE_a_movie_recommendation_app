import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="headerIcon" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logomr.png" />
        </Link>
        <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Recent Populars</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Recommended For You</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>See Them Soon</span></Link>
      </div>
    </div>
  );
};

export default Header;
