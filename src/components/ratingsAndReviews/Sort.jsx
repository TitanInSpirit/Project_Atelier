import React, {useState} from 'react';

const Sort = ({handleSortValue}) => {
  return (
    <form>
      248 reviews, sorted by
      <select className='sortForm'>
        <option value='relevance'>Relevance</option>
        <option value='newest'>Newest</option>
        <option value='helpful'>Helpful</option>
      </select>
    </form>
  )
}

export default Sort;