import React from 'react';

const User = ({ avatar, name, age, formation }) => {

  return (
    <div>
        <img src={avatar} height='50px' width='50px' alt="" />
        <h3>{name}</h3>
        <p>{age}</p>
        <h4>Nom école : {formation.school} </h4>
    </div>
  );
};

export default User;