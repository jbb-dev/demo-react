import React, { useState } from 'react';
import { INPUT_TYPE } from '../commun/inputType';

const Form = () => {

    const [playerName, setPlayerName] = useState('');
    const [password, setPassword] = useState('');
    // const [inputType, setInputType] = useState(INPUT_TYPE.PASSWORD);
    const [isPasswordType, setIsPasswordType] = useState(true);


    const handleName = (event) => {
        const value = event.target.value;
        setPlayerName(value);
    };

    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const register = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    // Méthode un bourrine
    // const showMyPassword = () => {
    //     if (inputType === INPUT_TYPE.PASSWORD)
    //     {
    //         setInputType(INPUT_TYPE.TEXT);
    //     }
    //     else
    //     {
    //         setInputType(INPUT_TYPE.PASSWORD);
    //     }
    // };

    const handleMyPassword = () => setIsPasswordType(!isPasswordType);

    return (
        <div>
            <form action="" onSubmit={register}>
                <div>
                    <label>Player name : </label>
                    <input 
                        type='text' 
                        value={playerName}
                        onChange={event => handleName(event)}
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