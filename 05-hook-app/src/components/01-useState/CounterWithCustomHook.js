import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 50 );



    return (
    <>
        <h1>Counter With Custom Hook: { state } </h1>
        <hr />

        <button onClick={ () => increment(2) } className='btn'> +1</button>
        <button onClick={ reset } className='btn'> RESET</button>
        <button onClick={ () => decrement(2) } className='btn'> -1</button>
    
        
    </>
  )
}
