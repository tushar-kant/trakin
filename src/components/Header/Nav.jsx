import React from 'react';

import './nav.css';
import Navavatar from './Navavatar';

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
      <ul className='d-flex align-items-center'>
        <div class="btn-group m-3 p-2 mt-4">
          <button class="btn  btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">Russian</a></li>
          </ul>
        </div>
        <Navavatar />
      </ul>


    </nav>
  )
}

export default Nav