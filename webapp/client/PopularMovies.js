import React from 'react';

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);
    this.mouseHover = this.mouseHover.bind(this);
    this.state = {
      hover: false,
    };
  }
  mouseHover() {
    this.setState(this.changeHover);
  }

  changeHover(state) {
    console.log(this.state.hover);
    return {
      hover: !state.hover,
    };
  }

  render() {
    const movie = this.props.result;
    const url = `https://image.tmdb.org/t/p/w300/${  movie.poster_path}`;
    return (
      <div>
        <h3> {movie.title} </h3>
        <img src={url} onMouseEnter={this.mouseHover} onMouseLeave={this.mouseHover} />
        {this.state.hover &&
        <p> {movie.overview} </p>}
      </div>
    );
  }
}

export default PopularMovies;
