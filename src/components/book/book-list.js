import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/index';
import { Link } from 'react-router';


class BookList extends Component {
    componentWillMount() {
        this.props.getBooks();
    }
    renderList() {
         return this.props.book.map((book) => {
            return (
                <li className='book-list'
                    key={book.book_id}>
                    <Link to={'books/' + book.book_id}>
                        {book.title}
                    </Link>
                </li>
            );
        })
    }

    render() {
        const { user } = this.props;
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        book: state.books.all,
        user: state.user.post

    }
}
export default connect(mapStateToProps, {getBooks})(BookList);