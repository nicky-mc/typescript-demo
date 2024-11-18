import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeScriptExample: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [color, setColor] = useState<string>('text-blue-500');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStartTyping(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Update the color every 2 seconds
  useEffect(() => {
    const colors: string[] = ['text-blue-500', 'text-green-500', 'text-red-500', 'text-yellow-500'];
    let index = 0;

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          {startTyping && (
            <Typewriter
              words={[`// TypeScript Dynamic Example\nconst colors: string[] = ['blue', 'green', 'red', 'yellow'];\nfunction changeColor(): string {\n  return colors[Math.floor(Math.random() * colors.length)];\n}`]}
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

      {/* Rendered Dynamic Example */}
      <div className="mt-4 p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className={`text-4xl font-bold ${color} transition-colors duration-500`}>
          Hello, TypeScript!
        </h1>
        <p className="text-gray-300 mt-2">
          This message changes its color dynamically every few seconds using TypeScript.
        </p>
        <p className="text-gray-400 mt-4 text-sm">
          TypeScript ensures type safety while keeping the code dynamic and fun!
        </p>
      </div>
    </div>
  );
};

export default TypeScriptExample;