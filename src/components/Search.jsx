import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search'>
        <input
          type='text'
          placeholder='search for a topic...'
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    const { search } = this.state;
    const { updateSearch } = this.props;
    event.preventDefault();
    updateSearch(search);
    this.setState({ search: '' });
  };
}

export default Search;
