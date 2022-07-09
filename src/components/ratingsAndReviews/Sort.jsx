import React, {useState} from 'react';

const Sort = () => {
  const [sortValue, setSortValue] = useState('')
  return (
    <form>
      248 reviews, sorted by
      <select className='sortForm'>
        <option value="1">relevance</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
  )
}

export default Sort;