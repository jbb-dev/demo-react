import React, { useState } from 'react';
import { INPUT_TYPE } from '../commun/inputType';

const Form = () => {

    const [user, setUser] = useState(
        {
            name: '',
            firstname: '',
            city: '',
            postalCode: '',
            email: '',
            password: ''
        }
    );

    const handleUser = (e, caracteristique) => {
        const userName = 'JB'
        console.log("Coucou je m'appelle ", userName)
        console.log(`Coucou je m'appelle ${userName}`)
        const value = e.target.value;
        setUser({...user, [`${caracteristique}`] : value})
    };

    const [isPasswordType, setIsPasswordType] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const register = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
    };

    const displayResult = () => {
        return(
            <div>
                Nom: {user.name}
                Prenom: {user.firstname}
                Ville: {user.city}
                CP: {user.postalCode}
                Login: {user.email}
                Password: {user.password}
            </div>
        )
    };

    const handleMyPassword = () => setIsPasswordType(!isPasswordType);

    return (
        <div>
            <button onClick={() => console.log(user)}>SHOW USER</button>
            <form action="" onSubmit={register}>
                <div>
                    <label>Nom : </label>
                    <input 
                        type='text' 
                        value={user.name}
                        onChange={event => handleUser(event, 'name')}
                    />
                </div>
                <div>
                    <label>Prénom : </label>
                    <input 
                        type='text' 
                        value={user.firstname}
                        onChange={event => handleUser(event, 'firstname')}
                    />
                </div>
                <div>
                    <label>Ville : </label>
                    <input 
                        type='text' 
                        value={user.city}
                        onChange={event => handleUser(event, 'city')}
                    />
                </div>
                <div>
                    <label>Code postal : </label>
                    <input 
                        type='text' 
                        value={user.postalCode}
                        onChange={event => handleUser(event, 'postalCode')}
                    />
                </div>
                <div>
                    <label>Login : </label>
                    <input 
                        type='text' 
                        value={user.email}
                        onChange={event => handleUser(event, 'email')}
                    />
                </div>
                <div>
                    <label>Password : </label>
                    <input 
                        type={isPasswordType ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT} 
                        value={user.password}
                        onChange={event => handleUser(event, 'password')}
                    />
                </div>
                <input type="submit" value="Subscribe!" />
            </form>
            <button onClick={handleMyPassword}>Show my password</button>
            { isSubscribed && displayResult() }
        </div>
    );
};

export default Form;