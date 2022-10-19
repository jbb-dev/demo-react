import './App.css';
import { useState } from 'react';
import UserList from './components/UserList';
import Form from './components/Form';
import ListPosts from './components/ListPosts';

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
      <ListPosts />
    </div>
  );
};

export default App;
