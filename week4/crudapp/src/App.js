import React from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import GoogleSignIn from './components/GoogleSignIn';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">CRUD App</h1>
      <GoogleSignIn/>
      <AddItemForm />
      <h2 className="item-list-title">Items</h2>
      <ItemList />
    </div>
  );
};

export default App;
