import * as actionTypes from '../actions/actionTypes';
import { authSuccess } from '../actions/auth';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStarted = (state, action) => {
    return updateObject(state, { error: null, loading: true });
};

const authSucceeded = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { idToken: null, userId: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStarted(state, action);
        case actionTypes.AUTH_SUCCESS: return authSucceeded(state, action);
        case actionTypes.AUTH_FAIL: return authFailed(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
};

export default reducer;