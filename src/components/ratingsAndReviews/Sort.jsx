import React, {useState, useEffect} from 'react';

const Sort = ({handleSortValue, reviews}) => {
  const [sortValue, setSortValue] = useState('')

  const options = ['relevance', 'newest', 'helpful']
  const {results} = reviews;

  const handleChange = e => {
    setSortValue(e.target.value);
    handleSortValue(e.target.value)
  }
  return (
    <form className='sortContainer'>
      {results && results.length} reviews, sorted by
      <select
        className='sortForm'
        value = {sortValue}
        onChange = {handleChange}>
          {options.map((option, i) => {
            return <option key={i} value={option}>{option[0].toUpperCase() + option.slice(1)}</option>
          })}
      </select>
    </form>
  )
}

export default Sort;