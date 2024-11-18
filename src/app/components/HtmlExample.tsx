import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HTMLExample: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`<!-- HTML Example -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, HTML!</title>\n    <style>\n      body {\n        background-color: #f0f0f0;\n        font-family: Arial, sans-serif;\n      }\n      h1 {\n        color: #333;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Hello, HTML!</h1>\n    <p>This is a simple HTML example demonstrating basic HTML structure and styling.</p>\n    <ul>\n      <li>HTML Document Structure</li>\n      <li>Head and Body Sections</li>\n      <li>Basic CSS Styling</li>\n    </ul>\n    <button>Click Me</button>\n  </body>\n</html>`]}
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