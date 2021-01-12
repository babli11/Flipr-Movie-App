import React from 'react';

const SearchInput=(props)=>{
    return (
        <div className="col col-sm-4">
            <input className="form-control"
             value={props.value}
             onChange={(event)=>props.setSearchMovie(event.target.value)}
              placeholder="Type movie name..." ></input>
        </div>
    )
}
export default SearchInput;