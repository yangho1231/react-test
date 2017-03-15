import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
class Navbar extends Component {

    render () {
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
function mapStateToProps(state) {
    return {
        user: state.user.post
    }
}
export default connect(mapStateToProps)(Navbar)