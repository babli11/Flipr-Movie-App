import React from 'react';
import Movie_logo from '../assets/Movie_logo.png'


const MovieHeader=(props)=>{

    if(props.appName){
        return (
        <div className='col'>
            <h1 style={{color:"#3D8B37"}}>{props.appName}</h1>
            
        </div>
    );

    }
    if(props.appName==='')
    return (
        <div className='col'>
            {/* <h1>{props.appName}</h1> */}
            <img src={Movie_logo} alt="logo"/>
        </div>
    );
};
export default MovieHeader;