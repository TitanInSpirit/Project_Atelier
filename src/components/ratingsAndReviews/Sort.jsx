import React, {useState, useEffect} from 'react';

const Sort = ({handleSortValue}) => {
  const [sortValue, setSortValue] = useState('')
  const options = ['relevance', 'newest', 'helpful']

  const handleChange = e => {
    setSortValue(e.target.value);
    handleSortValue(e.target.value)
  }
  return (
    <form>
      248 reviews, sorted by
      <select
        className='sortForm'
        value = {sortValue}
        onChange = {handleChange}>
          {options.map((option, i) => {
            return <option key={i} value={option}>{option[0].toUpperCase() + option.slice(1)}</option>
          })}
        {/* <option value='relevance'>Relevance</option>
        <option value='newest'>Newest</option>
        <option value='helpful'>Helpful</option> */}
      </select>
    </form>
  )
}

export default Sort;