import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div id="not-found-page">
    <h1>404</h1>
    <h3>Looks like this page doesn't exist (yet)...</h3>
    <Link to="/">Click here to go home.</Link>
  </div>
);

export default NotFound;
