import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
class SearchResult extends Component {

    renderList() {
        return this.props.book.all.map((book) => {
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
        const { book } = this.props;
        const result = book.all.length;
        const noResult = book.post;
        if(result !== 0) {
            return (
                <div>
                    <div>test</div>
                    {this.renderList()}

                </div>
            );
        }
        else if(noResult){
            return <div>
                        <h1>Couldn't find  {book.post}</h1>
                   </div>
        }
        else return <div></div>    
    }
}

function mapStateToProps(state) {
    return {
        book: state.search

    }
}
export default connect(mapStateToProps)(SearchResult);