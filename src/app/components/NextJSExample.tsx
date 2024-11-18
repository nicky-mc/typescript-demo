import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const NextJSExample: React.FC = () => {
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        } else {
          setStartTyping(false); // Stop the animation when out of view
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
              words={[`// Next.js Example\nimport Head from 'next/head';\nfunction HomePage() {\n  return <Head><title>My Next.js App</title></Head>;\n}`]}
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

      {/* Rendered Head Component */}
      <div className="bg-blue-100 p-4 rounded-lg mt-4">
        <h1 className="text-2xl font-bold text-blue-600">Rendered Next.js Example</h1>
        <p>Head component used to set the document title.</p>
      </div>
    </div>
  );
};

export default NextJSExample;