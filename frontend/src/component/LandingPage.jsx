
import React from 'react';

function LandingPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      //backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background
      color: 'black',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Add a text shadow
      }}>
        Welcome to the Auction Platform
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        lineHeight: '1.6',
        marginBottom: '30px',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
      }}>
        Discover exciting items, place your bids, and find great deals. Join our community of buyers and sellers today!
      </p>
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <button style={{
          padding: '12px 25px',
          fontSize: '1rem',
          backgroundColor: '#007bff', // Blue button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease'
        }}
        onClick={() => {window.location.href='/signup'}}
        >
          Sign Up
        </button>
        <button style={{
          padding: '12px 25px',
          fontSize: '1rem',
          backgroundColor: '#28a745', // Green button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease'
        }}
        onClick={()=>{window.location.href='/signin'}}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
