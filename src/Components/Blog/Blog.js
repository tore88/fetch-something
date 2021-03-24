import React from "react";
import classes from "./Blog.module.css";
import Post from "../Post/Post";
import Fullpost from "../Fullpost/Fullpost";
import { Button } from "react-bootstrap";

// import Newpost from "../Newpost/Newpost";

const author = `Harry Potter`;
const blog = (props) => {
  return (
    <div>
      <section className={classes.Blog}>
        <Post title="First post" author={author} />
        <Post title="Second post" author={author} />
        <Post title="Third post" author={author} />
      </section>
      <section>
        <Fullpost />
      </section>
      <Button>gdsgds</Button>
      {/* <section>
        <Newpost />
      </section>{" "}
      */}
    </div>
  );
};

export default blog;
