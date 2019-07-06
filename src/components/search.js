import React, { useState } from 'react'

const Search = ({ setSearch }) => {
  return (
    <div
      style={{
        marginLeft: '150px',
        color: 'white'
      }}
    >
      Search: 
      <input
        style={{
          marginLeft: '15px',
        }}
        onChange={(e) => setSearch(e.target.value)}
        type="text"></input>
    </div>
  )
}

export default Search