
// components/AuctionList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AuctionList() {
  const [auctions, setAuctions] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('http://localhost:5001/auctions');
        setAuctions(response.data);
      } catch (error) {
        setMessage('Failed to fetch auctions.');
      }
    };
    fetchAuctions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/auction/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAuctions(auctions.filter((auction) => auction._id !== id)); // Remove from list
      setMessage('Auction deleted successfully.');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Failed to delete auction.');
      }
    }
  };

  return (
    <div>
      <h1>Auction Items</h1>
      {message && <p>{message}</p>}
      <ul>
        {auctions.map((auction) => (
          <li key={auction._id}>
            {auction.itemName} - Current Bid: {auction.currentBid} - Closing:{' '}
            {new Date(auction.closingTime).toLocaleString()} - Created By: {auction.createdBy?.username || 'Unknown'}
            <button onClick={() => handleDelete(auction._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
