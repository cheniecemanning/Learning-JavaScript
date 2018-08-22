import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    
   state = {
            contacts: [
                { id: 1, name: 'Joe Doe', phone: '0301825', email: 'joe@gmail.com'},
                { id: 2, name: 'Noh Doe', phone: '07801825', email: 'Noh@gmail.com'},
                { id: 3, name: 'Jane Doe', phone: '07809301825', email: 'jane@gmail.com'},
                { id: 4, name: 'Ho Doe', phone: '078093825', email: 'ho@gmail.com'},
                { id: 5, name: 'Loe Doe', phone: '078093015', email: 'loe@gmail.com'}
            ]
    }
    
    deleteContact = id => {
        const { contacts } = this.state
        const newContacts = contacts.filter(contact => contact.id !== id)
        console.log()
        this.setState({
            contacts: newContacts
        })
    }

    render() {
     const { contacts } = this.state;

    return (
      <React.Fragment>
           {contacts.map(contact => (
               <Contact
                    key = {contact.id}
                    contact = {contact}
                    deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
           ))} 
      </React.Fragment>
    )
  }
}

export default Contacts