import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { Link } from 'react-router';

class BookList extends Component {
    renderList() {
        return this.props.book.map((book) => {
            return (
                <li 
                    key={book.title}
                                 >
                   <Link to={'book/'+ book.id}>
                   {book.title}
                   </Link>
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