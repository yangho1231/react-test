import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from'./components/app';
import NavBar from './components/navbar';
import BookList from './components/book-list';
import BookDetails from './components/active-book';
export default(
    <Route path = '/' component={App}>

        <IndexRoute component={BookList} />
  
        <Route path = '/book/:id' component={BookDetails} />
    
    
    </Route>
);