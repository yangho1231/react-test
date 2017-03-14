import React from 'react';
import { Link } from 'react-router';
export default function navbar() {
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