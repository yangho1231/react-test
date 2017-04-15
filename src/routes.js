import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from'./components/app';
import Book from './components/book/book';
import BookDetails from './components/active-book';
import SignUp from './components/sign-up';
import Login from './components/login';
import myPage from './components/mypage';
export default(
    <Route path = '/' component={App}>
        <IndexRoute component={Book} />
        <Route path = '/books/:id' component={BookDetails} />
        <Route path ='/signup' component={SignUp} />
        <Route path ='/login' component={Login} />
        <Route path='/mypage/:id'  component={myPage} />
    </Route>
);