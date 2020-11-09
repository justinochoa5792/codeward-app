import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Code Wars!</h1>
        <Link to="/">Home</Link>
        <Link to="/completed">Completed</Link>
      </div>
    );
  }
}

export default Header;
