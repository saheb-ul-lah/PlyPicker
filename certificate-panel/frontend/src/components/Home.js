const Home = () => {
    return (
      <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 min-h-screen flex flex-col justify-center items-center text-center">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-lg"></div>
        
        {/* Content */}
        <div className="relative z-10 p-6 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Certificate Panel
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Your gateway to managing and verifying certificates with ease.
          </p>
          <a
            href="/login"
            className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:text-blue-700 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
  