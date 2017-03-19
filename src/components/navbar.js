import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
class Navbar extends Component {

    render () {
        const { user } = this.props;
        console.log("user", user);
         if(user) {
            return(
                <div>
                    <ul className='navbar-ul'>
                        <li>Logut</li>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='mypage'>
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
export default connect(mapStateToProps)(Navbar)