import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeScriptExample: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`// TypeScript Example\nconst message: string = 'Hello, TypeScript!';\nconsole.log(message);`]}
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

export default TypeScriptExample;