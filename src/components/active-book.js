import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { addToMyPage } from '../actions/index';
import { Link } from 'react-router';
import { selectUser } from '../actions/index.js';
import { getBooks } from '../actions/index';
class BookDetails extends Component {

    componentWillMount() {
        this.props.selectBook(this.props.params.id)
        if(this.props.user) {
            this.props.selectUser(this.props.user.user.user_id);
        }
        else { 
            this.props.selectBook(this.props.params.id);
        }
    }
    renderList() {
          return this.props.list.map((list) => {
            console.log(list.book_id);
            console.log(this.props.params.id)
            if(list.book_id === parseInt(this.props.params.id)) {
                return (
                    <li className='book-list'
                        key={list.book_id}>
                            {list.book_id}
                    </li>
                );
            }
        })
    }
    render() {
        const {post} = this.props;
        const {user} = this.props;
        const {list} = this.props;
        if(!post) {
           return <div>Loading...</div>
        }
 
        if(user) {
            return (
                <div>
                    <h1>Title: {post.title}</h1>
                    <h2>Pages: {post.pages}</h2>
                    <div>Reviews:</div>
                    <button 
                        onClick={() => { this.props.addToMyPage(
                            {
                                userId: user.user.user_id, 
                                bookId: post.book_id
                            }
                            )}}>
                        Add this to my page
                    </button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Title: {post.title}</h1>
                    <h2>Pages: {post.pages}</h2>
                    <div>Reviews:</div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        post: state.books.post,
        user: state.user.post,
        list: state.list.all

    }
}
export default connect(mapStateToProps, {selectBook, addToMyPage, getBooks, selectUser})(BookDetails);