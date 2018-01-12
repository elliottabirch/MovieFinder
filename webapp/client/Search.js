import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: '',
    };
  }

  handleSubmit(event) {
    // api call
    event.target.reset();
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="What would you like to see?" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Search;
