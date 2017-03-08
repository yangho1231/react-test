import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
class BookList extends Component {
    renderList() {
        return this.props.book.map((book) => {
            return (
                <li
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                
                >
                {book.title}

                </li>
            )
        })
    }
    render() {
        return(
            <div>{this.renderList()}</div>
        )
    }
}
function mapStateToProps(state) {
    return {
        book: state.books
    }
}
export default connect(mapStateToProps, {selectBook})(BookList);