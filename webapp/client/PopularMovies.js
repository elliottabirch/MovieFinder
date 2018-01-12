import React from 'react';

class PopularMovies extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const movie = this.props.result;
    const url = "https://image.tmdb.org/t/p/w300/"+movie.poster_path
    var hover = false
    return (
      <div>
      <h3> {movie.title} </h3>
      <img src={url} onMouseEnter={()=>{hover = true}} onMouseLeave={()=>{hover = false}} />
      {hover ? (
      <p> {movie.overview} </p> ) : (
      <div/>  
      )}
      </div>
    )
  }
}

export default PopularMovies;