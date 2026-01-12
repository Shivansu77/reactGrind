import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import './App.css'
import Body from './components/Body.jsx'
import { auth } from './utils/firebase.jsx'
import { addUser, removeUser } from './utils/userSlice.jsx'

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName } = currentUser;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return <Body loading={loading} />
}

export default App
