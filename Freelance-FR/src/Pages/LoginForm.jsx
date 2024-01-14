import React, { useState } from 'react';
import '../App.css'; // Ensure this file exists and is correctly imported
import '../Styles/login.css'
import { Link } from 'react-router-dom';

function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex items-center justify-center w-screen sizebox">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">WaterFlow Inc.</h1>
        
        <div className="mb-4">
          <ul className="flex cursor-pointer justify-center -mb-px">
            <li className="mr-2">
              <a
                className={`inline-block py-2 px-4 font-semibold ${activeTab === 'login' ? ' border-b-2 border-blue-600' : 'text-gray-500 hover: hover:border-blue-600'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </a>
            </li>
            <li className="mr-2">
              <a
                className={`inline-block py-2 px-4 font-semibold ${activeTab === 'register' ? ' border-b-2 border-blue-600' : 'text-gray-500 hover: hover:border-blue-600'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </a>
            </li>
          </ul>
        </div>

        {activeTab === 'login' && (
          <div id="login">
            <form >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
              </div>
              <div className="flex items-center justify-between">
                <button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  
                <Link to="/home">Sign Up</Link>
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div id="register">
            <form >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                  Full Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="new-password" type="password" placeholder="********" />
              </div>
              <div className="flex items-center justify-between">
                <button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                <Link to="/home">Sign Up</Link>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;