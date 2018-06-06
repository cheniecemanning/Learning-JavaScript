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
    const topicsList = ['HTML', 'JavaScript', 'React'];
  
    //Underscore in method names helps distinguish custom methods from React Methods. 
    const _getComments =  () => { //This Method will return an array of JSX elements

      const commentList =[
        {id: 1, author: "Cheniece", body: "This is amaze"},
        {id: 2, author: "Marcus", body: "This is horrible"},
        {id: 3, author: "Joan", body: "This is Okay"}
      ];

      //Each element from commentList is passed as an argument
      return commentList.map((comment) => { // Returns an array
         return (<Comment  author={comment.author}  body={comment.body}  />); //with a new component built for each elementmin the commentList array
       });
    }

    
    return ( 
     _getComments()
    );
  }
}
export default CommentBox;
