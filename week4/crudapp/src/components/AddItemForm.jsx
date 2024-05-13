// AddItemForm.jsx
import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (itemName.trim() !== '') {
      await addDoc(collection(db, 'items'), {
        name: itemName,
        createdAt: new Date(),
      });
      setItemName('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button className="button" type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
