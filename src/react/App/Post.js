import React from "react";
import { Link } from "react-router-dom";

const Post = ({ params }) => (
  <div id={`post-page-${params.id}`}>
    <h1>Post: #{params.id}.</h1>
    <Link to="/">Click here to go home.</Link>
  </div>
);

export default Post;
