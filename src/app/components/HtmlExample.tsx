import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HtmlExample: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Key to reset the Typewriter
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        } else {
          setStartTyping(false);
          setResetKey((prev) => prev + 1); // Reset Typewriter when out of view
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          {startTyping && (
            <Typewriter
              key={resetKey} // Ensures animation resets when re-entering view
              words={[`<!DOCTYPE html>
<html>
  <head>
    <title>Hello, HTML!</title>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      h1 {
        background-color: #2d3748;
        color: #ec4899;
        font-size: 2.25rem;
        font-weight: 700;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                    0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: transform 0.5s, background-color 0.5s, color 0.5s;
      }
      h1:hover {
        transform: scale(1.1);
        background-color: #ec4899;
        color: #2d3748;
      }
      p {
        margin-top: 1rem;
        color: #4a5568;
      }
      ul {
        margin-top: 1rem;
        list-style-type: disc;
        padding-left: 1.5rem;
        color: #4a5568;
      }
      button {
        margin-top: 1rem;
        background-color: #3b82f6;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <h1>Hello, HTML!</h1>
    <p>This is a simple HTML example demonstrating basic HTML structure and styling.</p>
    <ul>
      <li>HTML Document Structure</li>
      <li>Head and Body Sections</li>
      <li>Basic CSS Styling</li>
    </ul>
    <button>Click Me</button>
  </body>
</html>`]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          )}
        </code>
      </pre>

      {/* Rendered Output */}
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

export default HtmlExample;