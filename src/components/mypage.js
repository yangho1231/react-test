import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index.js';
import { deleteBook } from '../actions/index.js';
import _ from 'lodash';
class myPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: 0
        }
    }
    
    componentWillMount() {    
        this.props.selectUser(this.props.params.id);
    }
    onClickChange() {
        this.setState({delete: list.book_id});
    }
    renderList() {
          return this.props.list.map((list) => {
            return (
                <li className='book-list'
                    key={list.book_id}>
                        {list.title}
                        <button
                        value={this.state.delete}
                        onChange={this.onClickChange} 
                        onClick={() => {
                            this.props.deleteBook(list.book_id);
                        }}>Delete</button>
                         
                </li>
            );
        })
        
    }
    
    render() {
        const {user} = this.props;
        const {list} = this.props;
        if(user) {

            return(
                <div>
                    <h2>Date Joined: {user.user.joined}</h2>
                    <h1>My Page</h1>
                    <h2>Username: {user.user.username}</h2>
                    <div>My Books:
                            <h1>
                                {this.renderList()}
                            </h1>
                            
                            
                    </div>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.post,
        list: state.list.all
    }
}

export default connect(mapStateToProps, { selectUser, deleteBook })(myPage);