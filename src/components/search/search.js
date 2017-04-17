import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBook } from '../../actions/index';
import { Link } from 'react-router';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onFormSubmit = this.onSubmit.bind(this);
    }
    onInputChange(event) {
        this.setState({term: event});
    }
    onSubmit(event) {
        event.preventDefault();
        const lowerCase = this.state.term.toLowerCase();
        this.props.searchBook(lowerCase);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
               <div> 
                    <input 
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                    <button>
                        <Link to='/search/book'>
                            Enter
                        </Link>
                    </button>
                </div>
            </form>
        );
    }
}
export default connect(null, { searchBook})(SearchBar);