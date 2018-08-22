import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { brand } = props
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-3'>
      <div className='container'>
        <a href='/' className='navbar-brand'>{brand}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Cool Stuff
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
    brand: 'My App'
}

Header.propTypes = {
    brand: PropTypes.string.isRequired
}
export default Header 