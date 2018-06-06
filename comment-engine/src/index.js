import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox />, document.getElementById('comment-app'));
registerServiceWorker();
