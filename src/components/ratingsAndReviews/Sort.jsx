import React, {useState, useEffect, useContext} from 'react';

const Sort = ({handleSortValue, results, reviewsCount}) => {
  const [sortValue, setSortValue] = useState('')

  const options = ['relevance', 'newest', 'helpful']

  const handleChange = e => {
    setSortValue(e.target.value);
    handleSortValue(e.target.value)
  }
  return (
    <form className='sortContainer'>
      {/* {console.log(results)} */}
      {/* {results && results.length} reviews, sorted by */}
      <h2 style={{display: 'inline-block', fontWeight: '500'}}>Showing {reviewsCount} reviews, sorted by</h2>
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