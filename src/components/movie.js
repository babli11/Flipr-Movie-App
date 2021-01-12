import React from 'react';

const Movie=(props)=>{
    const FavComponent=props.favComponent;
  
    return(
        <>
            {props.movies.map((movie,index)=>{
                return (
                    <div className="image-container  d-flex justify-content-start m-3" key={index}>
                        <img src={movie.Poster} alt=""/>
                        <div onClick={()=>props.handleFavClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                            <FavComponent/>
                        </div>
                    </div>);

                
            })}
        </>
    );

}
export default Movie;