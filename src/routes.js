import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from'./components/app';
import Books from './components/book/books';
import BookDetails from './components//currentBook/current-book';
import SignUp from './components/register/signUp';
import Login from './components/login/login';
import MyPage from './components/mypage/mypage';
import Admin from './components/admin/admin';
import Search from './components/search/searchResult';
export default(
    <Route>
        <Route path = '/' component={App}>
            <IndexRoute component={Books} />
            <Route path = '/books/:id' component={BookDetails}/>>
            <Route path='/mypage/:id'  component={MyPage} />
            <Route path='/admin/users' component={Admin} />
            <Route path='/search' component={Search} />
        </Route>            
        <Route path ='/signup' component={SignUp} />
        <Route path ='/login' component={Login} />
    </Route>
);