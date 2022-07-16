/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {BsSearch} from 'react-icons/bs';


/*==================== INTERNAL MODULES ====================*/
import {Search, PhotoPreview} from '../../../public/stylesheets/styles.js';



function SearchBar() {
  return (
    <PhotoPreview>
      <Search type="search" placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS . . ."></Search>
      <BsSearch />
    </PhotoPreview>
  )
}

/*==================== EXPORTS ====================*/
export default SearchBar;