import React, { Component } from "react";
import classes from "./Fullpost.module.css";
import Button from "react-bootstrap/Button";

import axios from "axios";

class Fullpost extends Component {
  state = {
    laodedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.laodedPost ||
        (this.state.laodedPost.id !== this.props.id && this.state.laodedPost)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((response) => {
            console.log(response.data.title);
            this.setState({ laodedPost: response.data });
            console.log(this.state.laodedPost.body);
          });
      }
    }
  }

  render() {
    let post = <p style={{ marginTop: "2rem" }}>Select post</p>;

    if (this.state.laodedPost) {
      post = (
        <div className={classes.Fullpost}>
          <h2>{this.state.laodedPost.title}</h2>
          <p>{this.state.laodedPost.body}</p>
          <Button className={classes.myButton}>myButton</Button>
        </div>
      );
    }

    return <div className={classes.Fullpost}>{post}</div>;
  }
}

export default Fullpost;
