import React, { Component } from 'react';
import './App.css';


class Comment extends Component {
  render() {
    const now = new Date();
    return (
      <div className="comment"> 
        <h5 className="comment-header">{this.props.author}</h5>
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
    //Underscore in method names helps distinguish custom methods from React Methods. 
    const _getComments = () => { //This Method will return an array of JSX elements
      const commentList =[
        {id: 1, author: "Cheniece", body: "This is amaze"},
        {id: 2, author: "Marcus", body: "This is horrible"},
        {id: 3, author: "Joan", body: "This is Okay"},
        {id: 4, author: "Harry", body: "This is Aight"}
      ];
      
    //Each element from commentList is passed as an argument
    return commentList.map((comment) => { // Returns an array
      //variables get passed into components as props
      return (<Comment  author={comment.author}  body={comment.body} key={comment.id} />); //with a new component built for each elementmin the commentList array
    });
    }

    const _getCommentsTitle = (commentCount) =>{
      if (commentCount === 0) {
        return 'No comments yet'; 
      } else if (commentCount === 1) {
        return '1 comment';
      } else {
        return `${commentCount} comments`;
      }
    }

    const comments = _getComments();
    return ( 
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{_getCommentsTitle(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
     );    
  }
}
export default CommentBox;
