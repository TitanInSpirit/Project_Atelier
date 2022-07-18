/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {BsSearch} from 'react-icons/bs';


/*==================== INTERNAL MODULES ====================*/
import {Search, PhotoPreview} from '../../../public/stylesheets/styles.js';



function SearchBar({searchTerm, setSearchTerm}) {
  /*----- STATE HOOKS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleSearch = ({target: {name, value}}) => {
    setSearchTerm(value);
  }

  /*----- RENDER FUNCTIONS -----*/


  /*----- RENDERER -----*/
  return (
    <PhotoPreview>
      <Search type="search" onChange={handleSearch} placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS . . ."></Search>
      <BsSearch />
    </PhotoPreview>
  )
}

/*==================== EXPORTS ====================*/
export default SearchBar;