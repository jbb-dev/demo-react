import './App.css';
import { useState } from 'react';
import UserList from './components/UserList';
import Form from './components/Form';
import Posts from './components/Posts';

function App() {

  const [prenom, setPrenom] = useState('');
  const [compteur, setCompteur] = useState(0);

  const addRobert = () => setPrenom('Robert');

  const addOne = () => setCompteur(compteur + 1);

  const removeOne = () => setCompteur(compteur - 1);

  return (
    <div className="App">
      {/* <Form /> */}
      {/* <UserList /> */}
      <Posts />
    </div>
  );
};

export default App;
