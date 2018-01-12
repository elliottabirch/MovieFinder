import React from 'react';
import PopularMovies from './PopularMovies';
import Search from './Search'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popular: {}
    }
    }
    componentDidMount(){
      fetch('/popular')
      .then(results => {
        return results.json()
      }).then(data=> {
        this.setState({popular: data})
        console.log(this.state.popular.results[0].title)
      })
    }

    

   render() {
     const apiCallSuc = this.state.popular.results;
      return (
         <div>
            <Search />
            {apiCallSuc ? this.state.popular.results.map((result) =>{
              return <PopularMovies result={result}/> 
            }): ''}
         </div>
      );
   }
}
export default App;