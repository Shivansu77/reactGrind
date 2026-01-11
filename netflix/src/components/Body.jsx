import React, { useEffect, useState } from 'react'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.jsx'

const Body = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          console.log('User logged in:', { uid, email, displayName });
        } else {
          dispatch(removeUser());
          console.log('User logged out');
        }
        setLoading(false);
      });
      return unsubscribe;
    }, [dispatch]);

    console.log('Current user state:', user);

    if (loading) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-red-600 text-2xl">Loading...</div>
        </div>
      );
    }

  return (
    <div>
       {user ? <Browse /> : <Login />}
    </div>
  )
}

export default Body