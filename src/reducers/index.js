import { combineReducers } from 'redux';
import GetBook from './reducer_getbooks';
import { reducer as formReducer } from 'redux-form';
import currentUser from './reducer_current_user';

const rootReducer = combineReducers({
    form: formReducer,
    books: GetBook,
    user: currentUser
});

export default rootReducer;
