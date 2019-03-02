import Http from "../../http-service";
import {
    LOGIN_PENDING,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    LOGIN_USER_FAILED,
    RESET_ERROR
} from "../../constants/actionTypes";

export const loginUser = (userAdmin, history) => {
    return dispatch => {
        dispatch({type: LOGIN_PENDING});
        if(userAdmin.email === 'admin' && userAdmin.password === 'admin') {
            dispatch(loginUserSuccess(userAdmin, history))
        }else {
            dispatch({type: LOGIN_USER_FAILED, payload: 'Wrong Email or Password'})
        }
        // Http.auth('/auth_login', user)
        //     .then(response => dispatch(loginUserSuccess(response, history)))
        //     .catch(res => dispatch({type: LOGIN_USER_FAILED, payload: 'Wrong Email or Password'}))
    };
};

export const loginUserSuccess = (userAdmin, history) => {
    // const user = response['data']
    // const userToken = user['jwt']['token'];
    localStorage.setItem('userAdmin', JSON.stringify(userAdmin));
    // localStorage.setItem('userToken', userToken);
    return dispatch => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: userAdmin
        });
        history.push('/admin/dashboard');
    }
};

export const resetError = () => {
    return {
        type: RESET_ERROR,
        payload: null
    }
}

export const logoutUser = () => {
    localStorage.removeItem('userAdmin');
    // localStorage.removeItem('userToken');
    return {
        type: LOGOUT_USER,
    }
};
