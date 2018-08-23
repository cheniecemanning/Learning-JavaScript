import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload
                )
            }
        default:
            return state
    }
}

export class Provider extends Component {

    state = {
        contacts: [
            { id: 1, name: 'Joe Doe', phone: '0301825', email: 'joe@gmail.com'},
            { id: 2, name: 'Noh Doe', phone: '07801825', email: 'Noh@gmail.com'},
            { id: 3, name: 'Jane Doe', phone: '07809301825', email: 'jane@gmail.com'},
            { id: 4, name: 'Ho Doe', phone: '078093825', email: 'ho@gmail.com'},
            { id: 5, name: 'Loe Doe', phone: '078093015', email: 'loe@gmail.com'}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
        
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer