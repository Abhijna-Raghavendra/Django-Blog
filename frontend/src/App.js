import './App.css';
import React, { Component } from "react";
import { Container } from "react";
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPostItems: []
    };
  }

  async getData() {
    try {
      const data = await fetch('http://127.0.0.1:8000/api/blog_list/');
      const blogPostItems = await data.json();
      console.log(blogPostItems);
      this.setState({
        blogPostItems
      });
    } catch (e) {
      console.log(e);
  }
}

  renderPosts(){
    this.getData();
    return this.state.blogPostItems.map(post => ( 
      <li>
          <h2>{post.title}</h2>
          <time> Published at: {post.created_date}</time>
          <p>{post.content}</p>
      </li>
    ));
  }

  render() {
    return (
      <main className="content">
        <div class="navbar">
          <h1>Django-Blog</h1>
          <table><tr><td><a href="http://127.0.0.1:8000/admin/" title="sign in to add blog posts">Sign In</a></td></tr></table>
        </div>
        <div class="content">
          <div class="blog_list">
            <ul>
              {this.renderPosts()}
            </ul>
          </div>    
        </div>
      </main>
    )
  }
}
export default App;