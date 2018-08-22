import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Contact extends Component {
   
    onShowClick = () => {
      console.log("hiii")
    }
  render() {
    const { contact } = this.props
    return (
      <div className='card card-body mb-3'>
        <h2>{contact.name} <i onClick={this.onShowClick} className='fas fa-sort-down'/></h2>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {contact.email}</li>
          <li className='list-group-item'>Phone number: {contact.phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;