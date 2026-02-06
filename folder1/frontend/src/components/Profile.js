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
    return <div className="text-center p-5">Loading...</div>;
  }

  return (
    <div className="p-5 bg-gray-900 rounded-lg my-5 shadow-md">
      <h2 className="text-green-500 mb-4">Our Team</h2>
      <div className="flex items-center gap-5">
        <img
          src={githubData.avatar_url}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h3 className="m-0 text-gray-100">{githubData.name || githubData.login}</h3>
          <p className="m-0 text-gray-300">{githubData.bio || 'Founder & CEO'}</p>
          <p className="m-0 text-gray-300">Location: {githubData.location || 'Not specified'}</p>
          <p className="m-0 text-gray-300">GitHub: @{githubData.login}</p>
          <p className="m-0 text-gray-300">Followers: {githubData.followers} | Following: {githubData.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
