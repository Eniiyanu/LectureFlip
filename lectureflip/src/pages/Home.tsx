import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to LectureFlip</h1>
      <p className="text-xl mb-8">Transform your lecture notes into interactive flashcards and Q & A pairs</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default Home;