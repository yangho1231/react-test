import { combineReducers } from 'redux';
import GetBook from './reducer_getbooks';
import { reducer as formReducer } from 'redux-form';
import currentUser from './reducer_current_user';
import myPage from './reducer_mypage';

const rootReducer = combineReducers({
    form: formReducer,
    books: GetBook,
    user: currentUser,
    list: myPage
});

export default rootReducer;
