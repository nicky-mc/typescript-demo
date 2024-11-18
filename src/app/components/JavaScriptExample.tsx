import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const JavaScriptExample: React.FC = () => {
    const [fizzBuzzOutput, setFizzBuzzOutput] = useState<string[]>([]);

    useEffect(() => {
        function fizzBuzz() {
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
        }
        fizzBuzz();
    }, []);

    return (
        <div className="bg-black p-4 rounded-lg text-white font-mono">
            <pre className="whitespace-pre-wrap">
                <code>
                    <Typewriter
                        words={[`// FizzBuzz Example\nfunction fizzBuzz() {\n  for (let i = 1; i <= 100; i++) {\n    if (i % 15 === 0) {\n      console.log('FizzBuzz');\n    } else if (i % 3 === 0) {\n      console.log('Fizz');\n    } else if (i % 5 === 0) {\n      console.log('Buzz');\n    } else {\n      console.log(i);\n    }\n  }\n}\n\nfizzBuzz();`]}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </code>
            </pre>
            <div className="mt-4">
                <h2 className="text-lg font-bold">FizzBuzz Output:</h2>
                <ul className="list-disc list-inside">
                    {fizzBuzzOutput.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default JavaScriptExample;