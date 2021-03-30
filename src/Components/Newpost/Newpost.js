import React, { Component } from "react";
import classes from "./Newpost.module.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Newpost extends Component {
  state = {
    post: {
      title: `title`,
      body: `text`,
      author: `Author`,
    },
  };

  sendDataHadler() {
    const data = { ...this.state.post };
    // {
    //   title: this.state.title,
    //   body: this.state.body,
    //   author: this.state.author,
    // };
    console.log(data);

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", data)
    //   .then((response) => console.log(response));
  }

  render() {
    console.log(this.state.post);
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
                value={this.state.body}
                onChange={(event) =>
                  this.setState({ body: event.target.value })
                }
                className={classes.textarea}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {/* <div>
                <label>Author</label>

                <select
                  className="form-select"
                  value={this.state.author}
                  onChange={(event) =>
                    this.setState({ author: event.target.value })
                  }
                >
                  <option value="Author1">Author1</option>
                  <option value="Author2">Author2</option>
                  <option value="Author3">Author3</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Button className={classes.button} onClick={this.sendDataHadler}>
              Add post
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Newpost;
