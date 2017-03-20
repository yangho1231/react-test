import React, { Component } from 'react';
import { connect } from 'react-redux';
class myPage extends Component {

    render() {
        const {user} = this.props;
        console.log(user);
        if(user) {
            return(
                <div>
                    <h1>My Page</h1>
                    <h2>Username: {user.user.username}</h2>
                    <div>My Books:
                        <li></li>
                    </div>
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

export default connect(mapStateToProps)(myPage);