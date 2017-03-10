import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/index';
import { Link } from 'react-router';

class BookList extends Component {
    componentWillMount() {
        this.props.getBooks();
    }
    renderList() {
        
        return this.props.book.map((book) => {
            
            return (
                <li key={book.book_id}>
                    
                    <Link to={'books/' + book.book_id}>
                        {book.title}
                    </Link>
                </li>
            );
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
        
        book: state.books.all
    }
}
export default connect(mapStateToProps, {getBooks})(BookList);