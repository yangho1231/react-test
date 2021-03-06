import { combineReducers } from 'redux';
import GetBook from './reducer_getbooks';
import { reducer as formReducer } from 'redux-form';
import currentUser from './reducer_current_user';
import myPage from './reducer_mypage';
import allUsers from './reducer_users';
import searchBook from './reducer_searchbook';
const rootReducer = combineReducers({
    form: formReducer,
    books: GetBook,
    user: currentUser,
    list: myPage,
    users: allUsers,
    search: searchBook

});
export default rootReducer;
