import React, { Component } from "react";

import Post from "../Post/Post";
import Fullpost from "../Fullpost/Fullpost";
import Newpost from "../Newpost/Newpost";
import axios from "axios";
import { Button } from "react-bootstrap";

class Blog extends Component {
  state = {
    post: [],
    selectedPost: null,
    show: false,
  };

  selectedId = (id) => {
    const selectedPost = id;
    this.setState({ selectedPost: selectedPost });
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 10);
        const newPost = posts.map((post) => {
          return {
            ...post,
            author: `n/a`,
          };
        });
        this.setState({ post: newPost });
      })
      .catch((error) => {
        alert("Someting went wrong");
      });
  }
  doesShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    let thePost = null;
    if (!this.state.show) {
      thePost = <div></div>;
    } else {
      thePost = this.state.post.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedId(post.id)}
          />
        );
      });
    }
    if (this.state.stateError) {
    }

    return (
      <div>
        <div className="container">
          <div className="row ">
            <div className="myButton">
              <Button onClick={this.doesShow}>Show</Button>
            </div>
            <div className="d-flex flex-row flex-wrap">{thePost}</div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <Fullpost id={this.state.selectedPost} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <Newpost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
