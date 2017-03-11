import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
class BookDetails extends Component {
    componentWillMount() {
        this.props.selectBook(this.props.params.id);
    }
     /*renderList() {
        return this.props.post.map((book) => {
            
            return (
            <div key={book.book_id}>
                
                Book Title:{ book.title}
                Book Pages: { book.pages}
            </div>
            );
        })
    }*/
    render() {
        const {post} = this.props;
        if(!post) {
           return <div>Loading...</div>
        }
        return (
            <div>
                <h1>Title: {post.title}</h1>
                <h2>Pages: {post.pages}</h2>
                <div>Reviews:</div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        post: state.books.post
    }
}
export default connect(mapStateToProps, {selectBook})(BookDetails);