import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { addToMyPage } from '../actions/index';
import { Link } from 'react-router';
import { selectUser } from '../actions/index.js';
import { getBooks } from '../actions/index';
import _ from 'lodash';

class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    componentWillMount() {
        this.props.selectBook(this.props.params.id)
        if(this.props.user) {
            this.props.selectUser(this.props.user.user.user_id);
        }
    }

    renderList() {
        const elems = [];
        const urlId = parseInt(this.props.params.id);
        this.props.list.forEach((list) => {
                if(list.book_id === urlId) {
                    elems.push({
                        book: list.book_id
                    })
                }
        })
        return elems;
    }
    render() {
        const {post} = this.props;
        const {user} = this.props;
        const {list} = this.props;
        const renderList = this.renderList();
        const urlId = parseInt(this.props.params.id);

        if(!post) {
           return <div>Loading...</div>
        }
        if(list) {
            if(urlId === _.get(renderList, '[0].book') || !user) {
                return (
                    <div>
                        <h1>Title: {post.title}</h1>
                        <h2>Pages: {post.pages}</h2>
                        <div>Reviews:</div>
                    </div>
                )
            }
            else {
                return (
                   <div>
                        <h1>Title: {post.title}</h1>
                        <h2>Pages: {post.pages}</h2>
                        <div>Reviews:</div>
                        {this.state.show && <button 
                            onClick={() => { this.props.addToMyPage(
                                {
                                    userId: user.user.user_id, 
                                    bookId: post.book_id
                                }
                                ); this.setState({show:false})}}>
                            Add this to my page
                        </button>
                        }
                    </div>
                )
            }
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