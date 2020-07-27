import {INITIAL_STATE} from '../constants/initialState';
// import {
//     DISCONNECT_USER,
//     CONNECT_USER,
// } from '../constants/actionTypes';

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        //----------------------------------------------------------------

        // case CONNECT_USER:
        //     return {
        //         ...state,
        //         connectedUser: action.payload.user
        //     } || state;
        //     break;
        //
        // case DISCONNECT_USER:
        //     return {
        //         ...state,
        //         connectedUser: null
        //     } || state;
        //     break;

            // socket io + add to the store

        //----------------------------------------------------------------
        default:
            return state;
    }
};

export default reducer;


