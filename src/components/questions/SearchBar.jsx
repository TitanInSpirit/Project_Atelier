/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {BsSearch} from 'react-icons/bs';

/*==================== INTERNAL MODULES ====================*/

function SearchBar() {
  return (
    <>
      <BsSearch />
      <input type="search" placeholder="What can we find for you?"></input>
    </>
  )
}

/*==================== EXPORTS ====================*/
export default SearchBar;