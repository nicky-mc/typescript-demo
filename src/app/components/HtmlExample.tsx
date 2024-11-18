import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HTMLExample: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`<!-- HTML Example -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, HTML!</title>\n    <style>\n      body {\n        background-color: #f0f0f0;\n        font-family: Arial, sans-serif;\n      }\n      h1 {\n        background-color: #2d3748;\n        color: #ec4899;\n        font-size: 2.25rem;\n        font-weight: 700;\n        padding: 1rem;\n        border-radius: 0.5rem;\n        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n        transition: transform 0.5s, background-color 0.5s, color 0.5s;\n      }\n      h1:hover {\n        transform: scale(1.1);\n        background-color: #ec4899;\n        color: #2d3748;\n      }\n      p {\n        margin-top: 1rem;\n        color: #4a5568;\n      }\n      ul {\n        margin-top: 1rem;\n        list-style-type: disc;\n        padding-left: 1.5rem;\n        color: #4a5568;\n      }\n      button {\n        margin-top: 1rem;\n        background-color: #3b82f6;\n        color: white;\n        padding: 0.5rem 1rem;\n        border-radius: 0.25rem;\n        transition: background-color 0.3s;\n      }\n      button:hover {\n        background-color: #1d4ed8;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Hello, HTML!</h1>\n    <p>This is a simple HTML example demonstrating basic HTML structure and styling.</p>\n    <ul>\n      <li>HTML Document Structure</li>\n      <li>Head and Body Sections</li>\n      <li>Basic CSS Styling</li>\n    </ul>\n    <button>Click Me</button>\n  </body>\n</html>`]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </code>
      </pre>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h1 className="bg-gray-800 text-pink-400 text-4xl font-bold p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:bg-pink-400 hover:text-gray-800">
          Hello, HTML!
        </h1>
        <p className="mt-4 text-gray-700">
          This is a simple HTML example demonstrating basic HTML structure and styling.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>HTML Document Structure</li>
          <li>Head and Body Sections</li>
          <li>Basic CSS Styling</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default HTMLExample;