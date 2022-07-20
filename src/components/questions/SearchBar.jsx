/*==================== EXTERNAL MODULES ====================*/
import React from 'react';
import {BsSearch} from 'react-icons/bs';
import styled from 'styled-components';


/*==================== INTERNAL MODULES ====================*/
import {Search, Container} from '../../../public/stylesheets/styles.js';



function SearchBar({searchTerm, setSearchTerm}) {
  /*----- STATE HOOKS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleSearch = ({target: {name, value}}) => {
    setSearchTerm(value);
  }

  /*----- RENDER FUNCTIONS -----*/


  /*----- RENDERER -----*/
  return (
    <SearchContainer>
      <Search type="search" onChange={handleSearch} placeholder=" HAVE A QUESTION? SEARCH FOR ANSWERS . . ."></Search><SearchIcon />
    </SearchContainer>
  )
}

/*==================== EXPORTS ====================*/
export default SearchBar;

const SearchContainer = styled(Container)`
  margin: 0.25em 0 0.25em 0;
  width: 80vw;
  border: solid;
  border-width: thin;
  align-items: center;
  justify-items: space-between;
  height: 2em;
`;

const SearchIcon = styled(BsSearch)`
  display: flex:
  padding: 4em;
  font-size: 1.25em;
  margin-left: 0.5rem;
  justify-self: flex-end;
`;