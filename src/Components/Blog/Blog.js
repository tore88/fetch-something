import React from "react";
import style from "./Blog.module.css";
import Post from "../Post/Post";
import Fullpost from "../Fullpost/Fullpost";
import Newpost from "../Newpost/Newpost";

const Blog = (props) => {
  return (
    <div className={style.Blog}>
      <Post title="first post" content="lot of things inside here" />
      <Post title="first post" content="lot of things inside here" />
      <Post title="first post" content="lot of things inside here" />
      <Post title="first post" content="lot of things inside here" />
      <Post title="first post" content="lot of things inside here" />

      {/* <section>
        <Fullpost />
      </section>
      <section>
        <Newpost />
      </section> */}
    </div>
  );
};

export default Blog;
