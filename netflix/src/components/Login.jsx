import { useState } from 'react'
import netflixBg from '../assets/netflix.jpg'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative z-10"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${netflixBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        <form className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email or phone number" 
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
          {!isSignIn && (
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
              />
            </div>
          )}
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
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
  )
}

export default Login
        <p className="text-gray-400 text-sm mt-4 text-center">
          {isSignIn ? "New to Netflix? " : "Already have an account? "}<span onClick={toggleSignIn} className="text-white cursor-pointer hover:underline">{isSignIn ? "Sign up now." : "Sign in now."}</span>
        </p>
      </div>
    </div>
  )
}

export default Login