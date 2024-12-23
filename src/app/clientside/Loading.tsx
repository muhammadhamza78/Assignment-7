"use client";  

import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="animate-spin h-12 w-12 border-4 border-t-green-500 border-solid rounded-full"></div>
      <p className="ml-4">Loading ...</p>
    </div>
  );
};

export default Loading;