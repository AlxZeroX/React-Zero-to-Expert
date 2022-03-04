import React, { useEffect, useState } from 'react'
import './effects.css'

export const SiempleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect(() => {
        console.log('Hey!')
    }, [] );

    useEffect(() => {
        console.log('FormState cambio')
    }, [ formState ] );

    useEffect(() => {
        console.log('email cambio')
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
    });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={handleInputChange}
                />

                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email.@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={handleInputChange}
                />



            </div>

        </>
    )
}