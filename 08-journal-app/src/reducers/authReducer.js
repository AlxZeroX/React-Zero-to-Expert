import { types } from '../types/types';
/*
    {
        uid: 'qwerrtasdsssdfgdfaa',
        name: 'Cristian Martinez'
    }

*/
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
                return { }
    
        default:
            return state;
    }

}