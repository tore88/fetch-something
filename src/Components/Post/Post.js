import React from "react";
import classes from "./Post.module.css";

const post = (props) => {
  return (
    <div className={classes.Post} onClick={props.clicked}>
      <div className={classes.Title}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.Author}>
        <p>{props.author}</p>
      </div>
    </div>
  );
};

export default post;
