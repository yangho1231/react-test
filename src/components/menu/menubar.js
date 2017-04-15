import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/index.js';

class Menubar extends Component {
    logout(event) {
        event.preventDefault();
        this.props.logout();
    }
    render () {
        const { user } = this.props;
        if(user) {
           return(
                <div>
                    <ul className='navbar-ul'>
                        <li onClick={this.logout.bind(this)}>
                            <Link to='/'>
                                LogOut
                            </Link>
                            
                        </li>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/mypage/' + user.user.user_id}>
                                    My Page
                            </Link>
                        </li>
                        <li>
                            {user.user.username}
                        </li>
                    </ul>
                </div>
            )
       }
       else {
             return(
                <div>
                    <ul className='navbar-ul'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>Mypage</li>
                        <li>
                            <Link to='/login'>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/signup'>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            )            
        }
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.post

    }
}
export default connect(mapStateToProps, { logout })(Menubar)