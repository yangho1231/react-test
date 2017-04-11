import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index.js';
import _ from 'lodash';
class myPage extends Component {
    componentWillMount() {    
        this.props.selectUser(this.props.params.id);
    }
    renderList() {
          return this.props.list.map((list) => {
            return (
                <li className='book-list'
                    key={list.book_id}>
                        {list.title}
                        <button onClick={() => {
                            console.log("Clicked", list.book_id) }}>Delete</button>
                </li>
            );
        })
    }
    
    render() {
        const {user} = this.props;
        const {list} = this.props;
        const date = _.get(list, '[0].joined');

        if(user) {
            return(
                <div>
                    <h2>Date Joined: {date}</h2>
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

export default connect(mapStateToProps, { selectUser })(myPage);