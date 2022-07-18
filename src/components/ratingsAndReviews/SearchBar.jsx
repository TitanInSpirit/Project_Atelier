import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;