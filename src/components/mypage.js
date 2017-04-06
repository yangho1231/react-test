import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index.js';
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
                </li>
            );
        })
    }
    
    render() {
        const {user} = this.props;
        if(user) {
            return(
                <div>
                    <h1>My Page</h1>
                    <h2>Username: {user.user.username}</h2>
                    <div>My Books:
                            {this.renderList()}
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