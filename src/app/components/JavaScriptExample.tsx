import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const JavaScriptExample: React.FC = () => {
  const [fizzBuzzOutput, setFizzBuzzOutput] = useState<string[]>([]);
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStartTyping(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    const fizzBuzz = () => {
      const output: string[] = [];
      for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
          output.push('FizzBuzz');
        } else if (i % 3 === 0) {
          output.push('Fizz');
        } else if (i % 5 === 0) {
          output.push('Buzz');
        } else {
          output.push(i.toString());
        }
      }
      setFizzBuzzOutput(output);
    };

    fizzBuzz();
  }, []);

  return (
    <div ref={ref} className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          {startTyping && (
            <Typewriter
              words={[`// FizzBuzz Exercise\nfor (let i = 1; i <= 100; i++) {\n  if (i % 15 === 0) console.log('FizzBuzz');\n  else if (i % 3 === 0) console.log('Fizz');\n  else if (i % 5 === 0) console.log('Buzz');\n  else console.log(i);\n}`]}
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

      {/* Rendered FizzBuzz */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-yellow-600 text-center">FizzBuzz Output:</h2>
        <div className="grid grid-cols-5 gap-2 mt-2">
          {fizzBuzzOutput.map((item, index) => (
            <div
              key={index}
              className={`p-2 text-center rounded-full ${
                item.includes('Fizz') || item.includes('Buzz')
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              🐝 {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaScriptExample;