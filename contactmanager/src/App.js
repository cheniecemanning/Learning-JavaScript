import React, { Component } from 'react'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import AddContacts from './components/contacts/AddContact'
import About from './components/pages/About'
import { Provider } from './context'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App ">
            <Header brand="Contact Manager" />
            <div className='container'>
                <Route exact path="/about" component={About} />
                <div className="row">
                  <div className="col-md-6">
                    <Route exact path="/" component={AddContacts} /> 
                  </div>
                  <div className="col-md-6">
                    <Route exact path="/" component={Contacts} />
                  </div>
                </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
