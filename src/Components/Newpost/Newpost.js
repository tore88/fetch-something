import React, { Component } from "react";
import classes from "./Newpost.module.css";
import Button from "react-bootstrap/Button";

class Newpost extends Component {
  state = {
    title: ``,
    content: ``,
    author: ``,
  };

  render() {
    return (
      <div classname={`container`} className={classes.mycontainer}>
        <div className="row">
          <h2 className=".col-sm-12">Add post</h2>
        </div>
        <div className="row">
          <div className="col-sm-12"></div>
          <div className="row">
            <div className="col-sm-12">
              <lable>Title</lable>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
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
            <select value={this.state.author} id="author">
              Select Author
              <option value="first Author">first Author</option>
              <option value="second Author">second Author</option>
              <option value="third Author">third Author</option>
            </select>
          </div>
        </div>
        <Button className={classes.button}> Add post</Button>
      </div>
    );
  }
}

export default Newpost;
