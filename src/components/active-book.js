import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
class BookDetails extends Component {
    componentWillMount() {
        this.props.selectBook(this.props.params.id);
    }
    render() {
        

        if(this.props.book === this.props.book.id) {
            return <div>That is matching</div>
        }
        return(
       

            <div>
                Book Title:{ this.props.book.title}
                Book Pages: { this.props.book.pages}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        book: state.active,
        books: state.books
    }
}
export default connect(mapStateToProps, {selectBook})(BookDetails);