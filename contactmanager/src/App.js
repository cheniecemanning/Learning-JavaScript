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
        <div className="App">
          <Header brand="Contact Manager" />
        <div className='container'>
          <AddContacts />
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
