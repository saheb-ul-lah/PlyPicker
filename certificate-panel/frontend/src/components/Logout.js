import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    const res = await fetch('http://localhost:5000/api/auth/logout', {
      method: 'GET',
      credentials: 'include'
    });

    if (res.ok) {
      alert('Logged out successfully');
      window.location.href = '/login'; // Redirect to login page after logout
    } else {
      alert('Error logging out... Please Log In first');
    }
  };

  const handleLogoutAll = async () => {
    const res = await fetch('http://localhost:5000/api/auth/logoutAll', {
      method: 'GET',
      credentials: 'include'
    });

    if (res.ok) {
      alert('Logged out from all devices');
      window.location.href = '/login'; // Redirect to login page after logout
    } else {
      alert('Error logging out from all devices... Please Log In first');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Logout</h2>
        <button
          onClick={handleLogout}
          className="w-full py-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Logout
        </button>
        <button
          onClick={handleLogoutAll}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Logout from All Devices
        </button>
      </div>
    </div>
  );
};

export default Logout;
