import React, { useEffect, useState } from 'react';
import User from './User';

const userFormation = {
    school: "ESGI",
    annee: 3,
    languages: ["JS", "PHP", "C"]
  };
  
  const studentsList = [
    {
      id: 1,
      name: 'sarah',
      age: 19,
      avatar: 'https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400073/75406321-vecteur-ic%C3%B4ne-fille-avatar-femme-ic%C3%B4ne-de-visage-style-de-bande-dessin%C3%A9e-.jpg',
      formation: userFormation
    },
    {
      id: 2,
      name: 'john',
      age: 20,
      avatar: "https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-user-avatar-boy-image_1482938.jpg",
      formation: userFormation
    },
    {
      id: 3,
      name: 'paul',
      age: 21,
      avatar: "https://static.vecteezy.com/ti/vecteur-libre/p1/1503756-garcon-visage-avatar-dessin-anime-gratuit-vectoriel.jpg",
      formation: userFormation
    },
];

const UserList = () => {

    const [count, setCount] = useState(0);
    const [hasCliked, setHasCliked] = useState(false);

    const getStudents = () => {
      console.log('getStudents');
    };

    useEffect(() => {
      getStudents();
    }, [count, hasCliked]);

    return (
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setHasCliked(!hasCliked)}>J'ai clique</button>

          <h3>Compteur = {count}</h3>
          <h1>Liste des étudiants de l'école : </h1>
            { studentsList.map((eleve, i) => 
                <User
                    key={i} 
                    {...eleve}
                />
            ) 
            }
        </div>
    );
};

export default UserList;