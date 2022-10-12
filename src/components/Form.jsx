import React, { useState } from 'react';

const Form = () => {

    const [playerName, setPlayerName] = useState('');
    const [password, setPassword] = useState('');

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

    const showMyPassword = () => {
        console.log('show my password');
    };



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
                        type='password' 
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <input type="submit" value="Subscribe!" />
            </form>
            <button onClick={showMyPassword}>Show my password</button>
        </div>
    );
};

export default Form;