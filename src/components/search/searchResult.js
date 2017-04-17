import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class SearchResult extends Component {

    renderList() {
        return this.props.book.map((book) => {
            return (
                <li 
                    key={book.book_id}>
                    <Link to={'books/' + book.book_id}>
                        {book.title}
                    </Link>
                </li>
            )
        })
    }
    render() {

        return (
            <div>
                <div>test</div>
                {this.renderList()}

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        book: state.search.all
    }
}
export default connect(mapStateToProps)(SearchResult);