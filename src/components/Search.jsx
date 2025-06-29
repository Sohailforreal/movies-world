import React from 'react';



const Search =(props)=>{
  return(
      <div className="search">
        <div>
          <img src="search.svg"/>
          
          <input
           type="text"
           placeholder="Movies on fingertips"
           value={props.searchTerm}
           onChange={(e) => props.setSearchTerm(e.target.value)}
          />

        </div>
      </div>
    
    )
}

export default Search;