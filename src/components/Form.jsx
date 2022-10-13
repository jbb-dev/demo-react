import React, { useState } from 'react';
import { INPUT_TYPE } from '../commun/inputType';

const Form = () => {

    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [isPasswordType, setIsPasswordType] = useState(true);


    const handleName = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleFirstname = (event) => {
        const value = event.target.value;
        setFirstname(value);
    };

    const handleCity = (event) => {
        const value = event.target.value;
        setCity(value);
    };

    const handlePostalCode = (event) => {
        const value = event.target.value;
        setPostalCode(value);
    };

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const register = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    const handleMyPassword = () => setIsPasswordType(!isPasswordType);

    return (
        <div>
            <form action="" onSubmit={register}>
                <div>
                    <label>Nom : </label>
                    <input 
                        type='text' 
                        value={name}
                        onChange={event => handleName(event)}
                    />
                </div>
                <div>
                    <label>Prénom : </label>
                    <input 
                        type='text' 
                        value={firstname}
                        onChange={event => handleFirstname(event)}
                    />
                </div>
                <div>
                    <label>Ville : </label>
                    <input 
                        type='text' 
                        value={city}
                        onChange={event => handleCity(event)}
                    />
                </div>
                <div>
                    <label>Code postal : </label>
                    <input 
                        type='text' 
                        value={postalCode}
                        onChange={event => handlePostalCode(event)}
                    />
                </div>
                <div>
                    <label>Login : </label>
                    <input 
                        type='text' 
                        value={email}
                        onChange={event => handleEmail(event)}
                    />
                </div>
                <div>
                    <label>Password : </label>
                    <input 
                        type={isPasswordType ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT} 
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <input type="submit" value="Subscribe!" />
            </form>
            <button onClick={handleMyPassword}>Show my password</button>
        </div>
    );
};

export default Form;