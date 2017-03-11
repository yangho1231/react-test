import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from'./components/app';
import NavBar from './components/navbar';
import BookList from './components/book-list';
import BookDetails from './components/active-book';
import SignUp from './components/sign-up';
export default(
    <Route path = '/' component={App}>

        <IndexRoute component={BookList} />
  
        <Route path = '/books/:id' component={BookDetails} />
        <Route path ='/signup' component={SignUp} />
    
    </Route>
);