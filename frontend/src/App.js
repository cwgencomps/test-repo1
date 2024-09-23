import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert('User added successfully!');
        setUser({ name: '', email: '' });
      } else {
        alert('Failed to add user.');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="App">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
