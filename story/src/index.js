import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoryBox from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StoryBox />, document.getElementById('story-app'));
registerServiceWorker();
