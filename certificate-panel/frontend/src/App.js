import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
// import UpdatePassword from './components/UpdatePassword';

const App = () => {
  return (
    <div className="app min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500 px-3 py-2 text-lg font-medium'
                    : 'text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500 px-3 py-2 text-lg font-medium'
                    : 'text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium'
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500 px-3 py-2 text-lg font-medium'
                    : 'text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium'
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500 px-3 py-2 text-lg font-medium'
                    : 'text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium'
                }
              >
                Logout
              </NavLink>
              {/* <NavLink
                to="/update-password"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 border-b-2 border-blue-500 px-3 py-2 text-lg font-medium'
                    : 'text-gray-600 hover:text-blue-500 px-3 py-2 text-lg font-medium'
                }
              >
                Update Password
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/update-password" element={<UpdatePassword />} /> */}
        </Routes>
      </div>
    </div>
  );
};

// Simple Home Component
const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Certificate Panel</h1>
      <p className="mt-4 text-lg text-gray-600">
        Please login, register, or logout using the navigation above.
      </p>
    </div>
  );
};

export default App;
