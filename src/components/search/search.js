import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange(event) {
        this.setState({term: event});
        console.log(event);
    }
    render() {
        return (
            <div>
                
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
                <button
                    >
                Enter
                </button>
            </div>
        );
    }
}
export default SearchBar;