import React, { Component } from "react";
import classes from "./Fullpost.module.css";
import Button from "react-bootstrap/Button";

class Fullpost extends Component {
  state = {
    title: ``,
    content: ``,
  };
  render() {
    let post = null;
    if (!post) {
      post = <p style={{ marginTop: "8rem" }}>Select post</p>;
      return (
        <div className={classes.Fullpost}>
          <div>{post}</div>
        </div>
      );
    } else {
      post = (
        <div className={classes.Fullpost}>
          <h2 className={classes.Title}>{this.state.title}</h2>
          <span className={classes.Content}>{this.state.content}</span>
          <div className="myButton">
            <Button size="sm"> Edit</Button>
          </div>
        </div>
      );
    }
    return { post };
  }
}

export default Fullpost;
