//search_bar.js

//searchbar

import React, { Component } from 'react';

// the above imports react and pulls components and variable called component


//const SearchBar = () => {
//return <input />
//};
// the above works to create an iput text box but can't get data from it.

// the following will fix that with  extends React.Component pulling {Components} with 
//importing react means we don't have to type react.components

// this will give SearchBar access to all react components

// constructor creates state
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: '' };
  }

  render() {
    return (
      <div>
	<input 
	value={this.state.term}
	onChange={event => this.setState({term: event.target.value}) } />;
        
      </div>
   );
	}
}
  


//the above puts an event handler on the searchbar and consoles the input value


export default SearchBar;