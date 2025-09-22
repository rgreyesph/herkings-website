import React, { useState, useEffect } from 'react';
import { API } from '@aws-amplify/api'; // <-- This is the corrected import
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function AdminPage({ signOut, user }) {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const apiName = 'herkingswebsiteAdminAPI';
        const path = '/subscribers';
        // The API.get() call remains the same
        const response = await API.get(apiName, path);
        setSubscribers(response);
      } catch (err) {
        console.error('Error fetching subscribers:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchSubscribers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Hello, {user.username}! <button onClick={signOut}>Sign Out</button></p>
      
      <h2>Subscriber List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid white', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>First Name</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Last Name</th>
              <th style={{ border: '1px solid white', padding: '8px' }}>Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.email}>
                <td style={{ border: '1px solid white', padding: '8px' }}>{sub.email}</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>{sub.firstName}</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>{sub.lastName}</td>
                <td style={{ border: '1px solid white', padding: '8px' }}>{new Date(sub.subscribedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default withAuthenticator(AdminPage);