import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookDetails extends Component {
 
    render() {
        if(!this.props.book) {
            return <div>Selecte a book</div>
        }
        return(

            <div>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        book: state.active
    }
}
export default connect(mapStateToProps)(BookDetails);