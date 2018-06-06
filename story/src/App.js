import React, { Component } from 'react';
import './App.css';

class StoryBox extends Component {
  render() {
    const topicsList = ['HTML', 'JavaScript', 'React'];
    const now = new Date();
    return (
      <div> 
        <h3>Story Box</h3>
        <p className="lead">
        Current time:{now.toLocaleTimeString()}
        </p>

        <ul>
          {topicsList.map(topic => <li>{topic}</li>)}
        </ul>
      </div> 
    );
  }
}


export default StoryBox;
