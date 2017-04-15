import React, { Component } from 'react';
import BookList from './book-list';
class Book extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        )
    }
}
export default Book;