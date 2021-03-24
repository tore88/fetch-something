import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <article className={style.Post}>
      <h1>{props.title}</h1>
      <span>{props.content}</span>
    </article>
  );
};

export default Post;
