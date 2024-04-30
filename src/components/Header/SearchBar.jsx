import React from 'react';
import './searchbar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
      <form
        className='search-form d-flex align-items-center'
        method='post'
        action='#'
      >
        <input type="text" name=';query' placeholder='search ' title='enter key' />
        <button type='submit' title='search'>
          <i className='bi bi-search'></i>
        </button>

      </form>
    </div>
  )
}

export default SearchBar;