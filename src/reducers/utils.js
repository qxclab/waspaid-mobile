import * as actions from '../actions/types';

const initialState = {
    loading: true
};

export default function utils(state = initialState, action) {
    switch (action.type) {
        case actions.START_LOADER: {
            return {
                ...state,
                loading: true,
            };
        }
        case actions.FINISHED_LOADER: {
            return {
                ...state,
                loading: false,
            };
        }
        default:
            return state;
    }
}
