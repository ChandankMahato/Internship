// ItemList.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const updatedItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(updatedItems);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleUpdate = async (id) => {
    if (newItemName.trim() !== '') {
      await updateDoc(doc(db, 'items', id), { name: newItemName });
      setNewItemName('');
      setSelectedItemId(null);
      fetchData(); // Fetch data again to update the table
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'items', id));
    fetchData(); // Fetch data again to update the table
  };

  return (
    <div className="item-list">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button className="update-button" onClick={() => setSelectedItemId(item.id)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedItemId && (
        <div className="update-form">
          <input
            className="input"
            type="text"
            placeholder="Enter new item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button className="save-button" onClick={() => handleUpdate(selectedItemId)}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
