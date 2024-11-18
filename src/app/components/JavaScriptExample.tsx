import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const JavaScriptExample: React.FC = () => {
  useEffect(() => {
    function greet() {
      console.log('Hello, JavaScript!');
    }
    greet();
  }, []);

  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`// JavaScript Example\nfunction greet() {\n  console.log('Hello, JavaScript!');\n}\n\ngreet();`]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </code>
      </pre>
    </div>
  );
};

export default JavaScriptExample;