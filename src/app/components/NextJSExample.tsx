import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const NextJSExample: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg text-white font-mono">
      <pre className="whitespace-pre-wrap">
        <code>
          <Typewriter
            words={[`// Next.js Example\nimport Head from 'next/head';\n\nfunction HomePage() {\n  return (\n    <Head>\n      <title>My Next.js App</title>\n    </Head>\n  );\n}\n\nexport default HomePage;`]}
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

export default NextJSExample;