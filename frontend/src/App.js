import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [version, setVersion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const helloResponse = await axios.get('/api/hello');
      setMessage(helloResponse.data);
      
      const statusResponse = await axios.get('/api/status');
      setStatus(statusResponse.data);

      const versionResponse = await axios.get('/api/version');
      setVersion(versionResponse.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error connecting to backend. Make sure the backend is running on port 8080.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>☕ Java + React App</h1>
        <p>Fullstack Application</p>
      </header>
      
      <main className="App-main">
        {error && <div className="error-message">{error}</div>}
        
        <div className="card">
          <h2>Backend API Response</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="response-item">
                <strong>Message:</strong>
                <p>{message || 'No message'}</p>
              </div>
              <div className="response-item">
                <strong>Status:</strong>
                <p>{status || 'No status'}</p>
              </div>
              <div className="response-item">
                <strong>Version:</strong>
                <p>{version || 'No version'}</p>
              </div>
            </>
          )}
          <button onClick={fetchData} className="refresh-btn" disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;