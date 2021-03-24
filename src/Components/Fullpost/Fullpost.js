import React, { Component } from "react";
import classes from "./Fullpost.module.css";

class Fullpost extends Component {
  state = {
    title: `kitta`,
    content: `MuortMuortMuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuort
    MuortMuortMuortMuortMuortMuort`,
  };
  render() {
    let post = null;
    // = <p>`Select a post`</p>;
    post = (
      <div className={classes.Fullpost}>
        <h2 className={classes.Title}>{this.state.title}</h2>
        <p className={classes.Content}>{this.state.content}</p>
        <button className={classes.Button}> Edit post</button>
      </div>
    );
    return post;
  }
}

export default Fullpost;
