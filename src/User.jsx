import React from 'react';

const User = (props) => {

  return (
    <div>
        <img src={props.avatar} height='50px' width='50px' alt="" />
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <h4>Nom école : {props.formation.school} </h4>
    </div>
  );
};

export default User;