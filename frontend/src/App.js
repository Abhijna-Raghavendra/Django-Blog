import './App.css';
import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPostItems: []
    };
  }

  async getData() {
    try {
      console.log("Hello");
      const data = await fetch('http://127.0.0.1:8000/api/blog_list/');
      const blogPostItems = await data.json();
      console.log(blogPostItems);
      this.setState({
        blogPostItems
      });
      console.log(this.state.blogPostItems);
    } catch (e) {
      console.log(e);
  }
}

  renderPosts(){
    this.getData();
    return this.state.blogPostItems.map(post => (
      
      <tr>
        <time>{post.created_date}</time>
          <h2>{post.title}</h2>
          <h4>{post.content}</h4>
      </tr>
    ));
  }

  render() {
    return (
      <main className="content">
        <div class="navbar">
          <h1>Django-Blog</h1>
        </div>
        <div class="blog">
          <div class="blog_list">
            <table>
              {this.renderPosts()}
            </table>
          </div>    
        </div>
      </main>
    )
  }
}

export default App;