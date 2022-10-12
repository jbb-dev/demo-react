import React, { useState } from 'react';
import { INPUT_TYPE } from '../commun/inputType';

const LoginForm = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div>
            <div>
                <label>Votre login : </label>
                <input type={INPUT_TYPE.PASSWORD} />
            </div>
            <div>
                <label>Votre mot de passe : </label>
                <input type={} />
            </div>
        </div>
    );
};

export default LoginForm;