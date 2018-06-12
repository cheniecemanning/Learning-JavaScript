import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    return (
      <div className="comment"> 
        <p className="comment-header"><strong>{this.props.author}</strong> {this.props.body}</p>
        <div className="commemt-footer">
          <a onClick={this.props.onClick} className="comment-footer-delete">Delete Comment</a>
        </div>
      </div> 
    );
  };
};

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form form-group" onSubmit={this._handleSubmit.bind(this)}>
        <label><h5>Add a comment</h5></label>
        <div className="comment-form-fields">
          <input className="form-control" placeholder="Name:" ref={(input)=> this._author = input}/>
          <textarea className="form-control" placeholder="Comment:" ref={(textarea)=> this._body = textarea}></textarea>
        </div>
        <br />
        <div className="comment-form-actions">
          <button className="btn btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}

class CommentBox extends Component {
  constructor() {
    super();
    this.state = { showComments: false, comments: [ {id: 1, author: "Mark", body: "This is horrible"}, {id: 2, author: "Joan", body: "This is cool"}]};
  }

  render() {
    const _deleteComment = () => {
    var array = this.state.comments; 
    array.splice(array, 1);
    this.setState(array);
  }
  
  const _getComments = () => { 
    return this.state.comments.map((comment) => {
      return (
        <Comment  author={comment.author}  body={comment.body} key={comment.id} />); //with a new component built for each elementmin the commentList array
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
  let commentNodes = <div onClick={_deleteComment.bind(this.state.comments)} className="comment-list">{comments}</div>;
  let buttonText = "Show comments";

  if (this.state.showComments) {
    buttonText = "Hide comments";
  } else {
    commentNodes = [];
  }

  return (    
    <div className="row">
      <div className="col-md-6 image">
        <img src="https://static1.squarespace.com/static/5264f7c9e4b0a3247c641860/560bc1dfe4b03cd1555edc15/560bc491e4b0cfeaccf77fcb/1443691810571/julia-trotti-instagram-diary_36.jpg" alt="cherry" />
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
    
        <div className="comment-box">
          <CommentForm addComment={this._addComment.bind(this)} />
        </div>
      </div>
    </div>
     );    

   
  }
  
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
      this.setState({ comments: this.state.comments.concat([comment]) });
    }
}

export default CommentBox;
