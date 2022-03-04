import { useState } from 'react';

export const useCounter = ( initialState = 50 ) => {

    const [ state, setState ]= useState ( initialState ); //50

    const reset = () => {
        setState( initialState );
    }

    const increment = ( factor = 1) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1) => {
        setState( state - factor );
    }



    return {
        state,
        increment,
        decrement,
        reset
    }

}
