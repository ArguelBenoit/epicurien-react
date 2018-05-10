import React, { Component } from 'react';

class Search extends Component {
  render() {
    return <div className="search row">
      <input type="text" placeholder="Research" />
      <input type="submit" value="Search"/>
    </div>;
  }
}
export default Search;
