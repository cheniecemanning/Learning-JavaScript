import React, { Component } from 'react'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import AddContacts from './components/contacts/AddContact'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App ">
          <Header brand="Contact Manager" />
        <div className='container'>
        <div className="row">
          <div className="col-6"><AddContacts /></div>
          <div className="col-6"><Contacts /></div>
        </div>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
