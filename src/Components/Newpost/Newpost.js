import React, { Component } from "react";
import classes from "./Newpost.module.css";
import Button from "react-bootstrap/Button";

class Newpost extends Component {
  state = {
    title: `0`,
    content: `0`,
    author: `0`,
  };

  render() {
    return (
      <div className={classes.myContainer}>
        <div className="container">
          <div className="row">
            <h2 className=".col-sm-12">Add post</h2>
          </div>
          <div className="row">
            <div className="col-sm-12"></div>
            <div className="row">
              <div className="col-sm-12">
                <label>Title</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input
                type="text"
                value={this.state.title}
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
                className={classes.input}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <label>Content</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea
                rows="5"
                value={this.state.content}
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
                className={classes.textarea}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <label>Author</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Button className={classes.button}> Add post</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newpost;
