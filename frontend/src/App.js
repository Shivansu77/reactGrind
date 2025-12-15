import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Simulating fetched user data
    const data = {
      name: "Shivansu Bisht",
    };

    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
