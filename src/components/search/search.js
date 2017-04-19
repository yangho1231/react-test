import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { searchBook } from '../../actions/index';
import { Link } from 'react-router';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onFormSubmit = this.onSubmit.bind(this);
    }
    static contextTypes = {
        router: PropTypes.object
    };
    onInputChange(event) {
        this.setState({term: event});
    }
    onSubmit(event) {
        event.preventDefault();
        const lowerCase = this.state.term.toLowerCase();
        this.props.searchBook(lowerCase).then((res) => { console.log("res", res);
        if(res.payload.data === "Search didn't match") this.context.router.push('/search?book=' + this.state.term);
        else { 
            this.context.router.push('/search?book=' + this.state.term); 
            this.setState({term: ''})
        }});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
               <div> 
                    <input 
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                    <button type='submit'>Enter</button>
                </div>
            </form>
        );
    }
}
export default connect(null, { searchBook})(SearchBar);