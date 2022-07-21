/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import {Search, Container} from '../../../public/stylesheets/styles.js';



function SearchBar({searchTerm, setSearchTerm}) {
  /*----- STATE HOOKS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleSearch = ({target: {name, value}}) => {
    setSearchTerm(value);
  }

  /*----- RENDERER -----*/
  return (
    <SearchContainer>
      <Search type="search" onChange={handleSearch} placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS . . ."></Search>
    </SearchContainer>
  )
}

/*==================== EXPORTS ====================*/
export default SearchBar;

const SearchContainer = styled(Container)`
  margin: 0.25em 0 0.25em 0;
  width: 60vw;
  border: solid;
  border-color: #5c5c5c;
  border-top: none;
  border-right: none;
  border-left: none;
  border-width: thin;
  align-items: center;
  justify-items: space-between;
  height: 2em;
`;
