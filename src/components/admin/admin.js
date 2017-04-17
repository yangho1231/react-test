import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index';
import { deleteUser } from '../../actions/index';

class Admin extends Component {
    componentWillMount() {
        this.props.getUsers();
    }
    deleteUser(user_id){
        this.props.deleteUser(user_id);
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li className='book-list' 
                    key={user.user_id}>
                    <div>
                        Username: {user.username}
                    </div>
                    <button 
                        className='delete'
                        onClick={() => this.deleteUser(user.user_id)}>
                    Delete
                    </button>
                </li>

            )
        })
    }
    render() {
        const {users} = this.props;

        return (
            <div>
                <h1>Total Users: {users.length}</h1>         <h1>Users:</h1>
                <h1>{this.renderList()}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.all
    }
}

export default connect(mapStateToProps, { getUsers, deleteUser })(Admin);