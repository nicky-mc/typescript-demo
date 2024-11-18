import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HtmlExample: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStartTyping(entry.isIntersecting),
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
              words={[`<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, HTML!</title>\n    <style>...\n    </style>\n  </head>\n  <body>\n    <h1>Hello, HTML!</h1>\n    <p>...</p>\n  </body>\n</html>`]}
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