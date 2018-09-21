import * as actions from '../actions/types';

const initialState = {
    user: {}
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case actions.AUTH_SAVE_DATA: {
            return {
                ...state,
                auth: action.payload,
            };
        }
        case actions.SAVE_USER_DATA: {
            return {
                ...state,
                user: action.payload,
            };
        }
        default:
            return state;
    }
}
