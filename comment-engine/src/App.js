import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    const now = new Date();
    return (
      <div className="comment"> 
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
        <b>{this.props.body}</b>
        <p className="comment-post-time">
        Post time:{now.toLocaleTimeString()}
        </p>
        </p>
        <div className="commemt-footer">
          <a href="#" className="comment-footer-delete">Delete Comment</a>
        </div>
       

    
      </div> 
    );
  }
}

class CommentBox extends Component {
  render() {
    const topicsList = ['HTML', 'JavaScript', 'React'];
    return ( 
      <div className="comment-box">
      <h3>Comments</h3>
      <h4> Topics </h4>
      <ul>
          {topicsList.map(topic => <li>{topic}</li>)}
        </ul>
      <h5 className="comment-count">2 comments</h5>
      <div className="comment-list">
        <Comment author="Cheniece" body="This is amaze" />
        <Comment author="Marcus" body="I hate this" />
      </div>
      </div>
    );
  }
}
export default CommentBox;
