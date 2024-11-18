import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TailwindExample: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`<!-- Tailwind CSS Example -->\n<div className="grid place-items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">\n  <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg shadow-lg">\n    <h1 className="text-4xl font-bold text-gray-800">Tailwind CSS Example</h1>\n    <p className="text-lg text-gray-600">This is a fancy example using Tailwind CSS, Grid, Flexbox, and DaisyUI features.</p>\n    <button className="btn btn-primary">Primary Button</button>\n    <button className="btn btn-secondary">Secondary Button</button>\n  </div>\n</div>`]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </code>
      </pre>
      <div className="grid place-items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 mt-4">
        <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">Tailwind CSS Example</h1>
          <p className="text-lg text-gray-600">This is a fancy example using Tailwind CSS, Grid, Flexbox, and DaisyUI features.</p>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
        </div>
      </div>
    </div>
  );
};

export default TailwindExample;