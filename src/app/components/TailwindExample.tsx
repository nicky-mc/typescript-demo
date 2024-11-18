import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TailwindExample: React.FC = () => {
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
              words={[`<div className="grid place-items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">...\n</div>`]}
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

      {/* Rendered Tailwind Output */}
      <div className="grid place-items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 mt-4">
        <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">Tailwind CSS Example</h1>
          <p className="text-lg text-gray-600">
            This example demonstrates Tailwind CSS, Grid, Flexbox, and DaisyUI features.
          </p>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
        </div>
      </div>
    </div>
  );
};

export default TailwindExample;