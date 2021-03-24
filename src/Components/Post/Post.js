import React from "react";
import classes from "./Post.module.css";

const post = (props) => {
  return (
    <article className={classes.Post}>
      <div className={classes.Title}>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.Author}>
        <p>{props.author}</p>
      </div>
    </article>
  );
};

export default post;
