import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
      <div className='ui segment' style={{ marginTop: '10px' }}>
        <div className='ui form'>
          <form className='field' onSubmit={this.onFormSubmit}>
            <label>Video Search</label>
            <input type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </div>
      </div>
    )
  }
}
