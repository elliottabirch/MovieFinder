import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popular: ''
    }
    }
    componentDidMount(){
      fetch('/popular')
      .then(results => {
        return results.json()
      }).then(data=> {
        console.log(data);
      })
    }


   render() {
      return (
         <div>
            <input type="text" placeholder="Search.." />
         </div>
      );
   }
}
export default App;