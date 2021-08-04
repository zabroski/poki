import React,{useState} from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange }) => {
  

  return (
    <div className='searchBox'>
      <input
        className="ba b--green bg-lightest-blue"
        type='search'
        placeholder='search Pokemon'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;