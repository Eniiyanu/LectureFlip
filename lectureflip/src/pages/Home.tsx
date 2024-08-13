import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to LectureFlip
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Transform your lecture notes into interactive flashcards and Q&A pairs
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link to="/upload" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Get Started
        </Link>
      </motion.div>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Upload Notes</h2>
          <p>Easily upload your lecture notes and materials in various formats.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Generate Flashcards</h2>
          <p>Our AI automatically creates flashcards from your uploaded content.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Study Smarter</h2>
          <p>Review your flashcards and track your progress for efficient learning.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;