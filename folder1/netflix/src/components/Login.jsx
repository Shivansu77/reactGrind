import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import netflixBg from '../assets/netflix.jpg';
import { validateEmailPassword } from '../utils/validate.jsx';
import { auth } from '../utils/firebase.jsx';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from 'firebase/auth';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const mapAuthError = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email already registered. Please sign in instead.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password is too weak. Minimum 6 characters.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Incorrect email or password.';
      case 'auth/popup-closed-by-user':
        return 'Popup closed. Please try again.';
      case 'auth/popup-blocked':
        return 'Popup was blocked. Trying redirect...';
      case 'auth/unauthorized-domain':
        return 'Domain not authorized in Firebase OAuth settings.';
      case 'auth/operation-not-allowed':
        return 'Email/password sign-in is disabled in Firebase console.';
      default:
        return 'Something went wrong. Please try again.';
    }
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value;
    const fullNameValue = fullName.current?.value.trim();

    if (!emailValue || !passwordValue) {
      setErrorMessage('Email and password are required.');
      return;
    }

    if (!isSignIn && !fullNameValue) {
      setErrorMessage('Full name is required.');
      return;
    }

    const isValid = validateEmailPassword(emailValue, passwordValue);

    if (!isValid) {
      setErrorMessage('Invalid Email or Password');
      return;
    }

    setErrorMessage('');

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

        if (fullNameValue) {
          await updateProfile(userCredential.user, { displayName: fullNameValue });
        }
      }
    } catch (error) {
      const friendly = mapAuthError(error.code);
      setErrorMessage(friendly);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage('');
    const provider = new GoogleAuthProvider();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    try {
      if (isMobile) {
        await signInWithRedirect(auth, provider);
        return;
      }
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
        try {
          await signInWithRedirect(auth, provider);
          return;
        } catch (fallbackError) {
          setErrorMessage(mapAuthError(fallbackError.code));
          return;
        }
      }
      setErrorMessage(mapAuthError(error.code));
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage('');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${netflixBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>

        <form onSubmit={handleButtonClick} className="space-y-4">
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
          />

          {!isSignIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
            />
          )}

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="h-px flex-1 bg-gray-700" />
            <span>OR</span>
            <div className="h-px flex-1 bg-gray-700" />
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path fill="#EA4335" d="M24 9.5c3.54 0 6 1.54 7.38 2.83l5.4-5.26C33.46 3.36 28.99 1.5 24 1.5 14.93 1.5 7.17 6.9 3.67 14.44l6.63 5.14C12.13 14.03 17.57 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.57-.14-3.09-.4-4.5H24v9h12.7c-.55 2.9-2.22 5.35-4.7 7.03l7.2 5.6C43.95 37.8 46.5 31.7 46.5 24.5z"/>
              <path fill="#FBBC05" d="M10.3 28.94a14.5 14.5 0 0 1 0-9.88l-6.63-5.14a23.5 23.5 0 0 0 0 20.16l6.63-5.14z"/>
              <path fill="#34A853" d="M24 47.5c6.48 0 11.9-2.13 15.87-5.77l-7.2-5.6c-2 1.35-4.58 2.17-7.67 2.17-6.43 0-11.86-4.53-13.7-10.68l-6.63 5.14C7.17 41.1 14.93 47.5 24 47.5z"/>
              <path fill="none" d="M1.5 1.5h45v45h-45z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          {isSignIn ? 'New to Netflix? ' : 'Already have an account? '}
          <span
            onClick={toggleSignIn}
            className="text-white cursor-pointer hover:underline"
          >
            {isSignIn ? 'Sign up now.' : 'Sign in.'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
