import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class Contact extends Component {
   
  state = {
    showContactInfo: true
  }
    
  onDeleteClick = () => {
    this.props.deleteClickHandler()
  }

  render() {
    const { contact } = this.props
    const { showContactInfo } = this.state

    return (
      <div className='card card-body mb-3'>
        <h2>{contact.name} {' '}
           <i 
            onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} 
            className='fas fa-sort-down'
            style= {{cursor: 'pointer'}}
          />

           <i 
            onClick={this.onDeleteClick} 
            className='fas fa-times'
            style= {{cursor: 'pointer', float: 'right', color: 'crimson'}}
          />
        </h2>
        { showContactInfo ? (   
          <ul className='list-group'>
            <li className='list-group-item'>Email: {contact.email}</li>
            <li className='list-group-item'>Phone number: {contact.phone}</li>
          </ul>
          ) : null
        }
     
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;