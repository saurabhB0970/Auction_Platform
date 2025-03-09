
// components/CreateAuction.jsx
import React, { useState } from 'react';
import axios from 'axios';

function CreateAuction() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5001/auction',
        {
          itemName,
          description,
          startingBid,
          closingTime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setMessage(response.data.message);
      setItemName('');
      setDescription('');
      setStartingBid('');
      setClosingTime('');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred.');
      }
    }
  };

  return (
    <div>
      <h1>Create Auction Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:  </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="description">Description:      </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br />

        <label htmlFor="startingBid">Starting Bid:      </label>
        <input
          type="number"
          id="startingBid"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          required
        /><br />

        <label htmlFor="closingTime">Closing Time:</label>
        <input
          type="datetime-local"
          id="closingTime"
          value={closingTime}
          onChange={(e) => setClosingTime(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateAuction;
