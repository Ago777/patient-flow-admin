import {
    LOGIN_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGOUT_USER,
    RESET_ERROR
} from 'Constants/actionTypes';

const INIT_STATE = {
    userAdmin: JSON.parse(localStorage.getItem('userAdmin')),
    loading: false,
    loginError: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {...state, loading: true};
        case LOGIN_USER_SUCCESS:
            return {...state, loading: false, userAdmin: action.payload};
        case LOGIN_USER_FAILED:
            return {...state, loading: false, loginError: action.payload};
        case RESET_ERROR:
            return {...state, loginError: action.payload};
        case LOGOUT_USER:
            return {...state, userAdmin: null};
        default:
            return {...state};
    }
}
