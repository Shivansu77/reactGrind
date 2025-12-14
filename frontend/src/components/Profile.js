import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [githubData, setGithubData] = useState(null);
  
  useEffect(() => {
    fetchGithubData();
  }, []);

  const fetchGithubData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/shivansu77');
      const data = await response.json();
      setGithubData(data);
    } catch (error) {
      console.error('Failed to fetch GitHub data:', error);
    }
  };

  if (!githubData) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#111',
      borderRadius: '12px',
      margin: '20px 0',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#2ecc71', marginBottom: '15px' }}>Our Team</h2>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img 
          src={githubData.avatar_url} 
          alt="Profile" 
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <div>
          <h3 style={{ margin: '0 0 8px 0', color: '#e6e6e6' }}>{githubData.name || githubData.login}</h3>
          <p style={{ margin: '0 0 5px 0', color: '#cfcfcf' }}>{githubData.bio || 'Founder & CEO'}</p>
          <p style={{ margin: '0', color: '#cfcfcf' }}>Location: {githubData.location || 'Not specified'}</p>
          <p style={{ margin: '5px 0 0 0', color: '#cfcfcf' }}>GitHub: @{githubData.login}</p>
          <p style={{ margin: '5px 0 0 0', color: '#cfcfcf' }}>Followers: {githubData.followers} | Following: {githubData.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
