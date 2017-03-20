import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { addToMyPage } from '../actions/index';
import { Link } from 'react-router';
class BookDetails extends Component {
     componentWillMount() {
        this.props.selectBook(this.props.params.id);
    }
    onClick(e) {

        console.log('button clicked', e);

    }
    render() {
        const {post} = this.props;
        const {user} = this.props;
        console.log("This Book", post)
        if(!post) {
           return <div>Loading...</div>
        }
        return (
            <div>
   
                <h1>Title: {post.title}</h1>
                <h2>Pages: {post.pages}</h2>
                <div>Reviews:</div>
                <div 
                    onClick={this.onClick}>
                    Add this to my page
                </div>

            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        post: state.books.post,
        user: state.user.post

    }
}
export default connect(mapStateToProps, {selectBook, addToMyPage})(BookDetails);