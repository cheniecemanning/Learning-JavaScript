import React, { Component } from 'react';
import './App.css';


class Comment extends Component {
  render() {
    return (
      <div className="comment"> 
        <p className="comment-header"><strong>{this.props.author}</strong> {this.props.body}</p>
        <div className="commemt-footer">
          <a href="#" className="comment-footer-delete">Delete Comment</a>
        </div>
       

    
      </div> 
    );
  }
}

class CommentBox extends Component {

  constructor() {
    super();

    this.state = { showComments: false};
  }

  render() {
    //Underscore in method names helps distinguish custom methods from React Methods. 
    const _getComments = () => { //This Method will return an array of JSX elements
      const commentList =[
        {id: 1, author: "Cheniece", body: "This is amaze"},
        {id: 2, author: "Mark", body: "This is horrible"},
        {id: 3, author: "Joan", body: "This is Okay"},
        {id: 4, author: "Harry", body: "This is Aight"}
      ];
      
    //Each element from commentList is passed as an argument
    return commentList.map((comment) => { // Returns an array
      //variables get passed into components as props
      return (<Comment  author={comment.author}  body={comment.body} key={comment.id} />); //with a new component built for each elementmin the commentList array
    });
    }

    const _getCommentsTitle = (commentCount) => {
      if (commentCount === 0) {
        return 'No comments yet'; 
      } else if (commentCount === 1) {
        return '1 comment';
      } else {
        return `${commentCount} comments`;
      }
    }

    const _handleClick = () => {
      this.setState({showComments: !this.state.showComments});
    }

    const comments = _getComments();
    let commentNodes;
    let buttonText = "Show comments";

    if (this.state.showComments) {
      commentNodes = <div className="comment-list">{comments}</div>;
      buttonText = "Hide comments";
    }

    return ( 
      <div className="row" >
      <div className="col-md-6 image">
      <img src="https://static1.squarespace.com/static/5264f7c9e4b0a3247c641860/560bc1dfe4b03cd1555edc15/560bc491e4b0cfeaccf77fcb/1443691810571/julia-trotti-instagram-diary_36.jpg" />
      </div>

      <div className="comment-box col-md-6">
        <div className="title">
          <h3>Comments</h3>
        </div>
        <div className="row">
        <h4 className="col-md-6 comment-count">{_getCommentsTitle(comments.length)}</h4>

        <div className="col-md-6">
        <button className="float-right btn btn-primary" onClick={_handleClick}>{buttonText}</button>
        </div>

        </div>
        {commentNodes}
        </div>
      </div>
     );    
  }
}
export default CommentBox;
