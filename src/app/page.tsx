"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import JavaScriptExample from './components/JavaScriptExample';
import HTMLExample from './components/HtmlExample';
import TailwindExample from './components/TailwindExample';
import NextJSExample from './components/NextJSExample';
import TypeScriptExample from './components/TypescriptExample';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicky&apos;s Portfolio</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-l from-slate-200 via-rose-200 to-transparent p-8 text-slate-800">
        {/* Header Section */}
        <header className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl font-bold bg-gradient-to-l from-slate-700 via-red-200 to-slate-200 bg-clip-text text-transparent">
                  About
                </h2>
                <p className="text-slate-600">Learn more about who I am and what I do.</p>
                <a
                  href="#about"
                  className="btn btn-accent mt-4 hover:bg-rose-300 hover:text-slate-800"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl font-bold bg-gradient-to-l from-slate-700 via-red-200 to-slate-200 bg-clip-text text-transparent">
                  Projects
                </h2>
                <p className="text-slate-600">Discover my creative and technical work.</p>
                <a
                  href="#projects"
                  className="btn btn-primary mt-4 hover:bg-rose-300 hover:text-slate-800"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl font-bold bg-gradient-to-l from-slate-700 via-red-200 to-slate-200 bg-clip-text text-transparent">
                  Contact
                </h2>
                <p className="text-slate-600">Get in touch to collaborate or connect.</p>
                <a
                  href="#contact"
                  className="btn btn-secondary mt-4 hover:bg-rose-300 hover:text-slate-800"
                >
                  Reach Out
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Banner Section */}
        <div className="flex justify-center my-12">
          <Image
            src="/Graduate.png"
            alt="Graduate Banner"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover max-h-96"
          />
        </div>

        {/* Main Section */}
        <main className="flex flex-col md:flex-row items-center text-center md:text-left py-20 space-y-8 md:space-y-0 md:space-x-12">
          <Image
            className="rounded-full border-4 border-white shadow-lg"
            src="/profile.jpeg"
            alt="Profile Picture"
            width={150}
            height={150}
          />
          <div>
            <h2 className=""text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-slate-50 via-neutral-300 to-slate-700 bg-clip-text text-transparent">
              Hello, I&apos;m Nicky Mortoza-Cowles
            </h2>
            <p className="text-lg md:text-xl mt-4 text-slate-700 leading-relaxed">
              A passionate Web Developer with experience in modern web technologies and a keen interest in learning and creating.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="btn btn-primary hover:bg-rose-300 hover:text-slate-800"
              >
                View My Work
              </a>
              <Link
                href="/Pokemon"
                className="btn btn-secondary hover:bg-rose-300 hover:text-slate-800"
              >
                Go to Pokémon
              </Link>
              <a
                href="#animations"
                className="btn btn-accent hover:bg-rose-300 hover:text-slate-800"
              >
                Explore My Skills
              </a>
            </div>
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className=""text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-slate-50 via-neutral-300 to-slate-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-slate-700 mt-4 max-w-2xl mx-auto">
            I&apos;m a student web developer with a passion for creating
            beautiful and functional websites. I have experience in various web
            technologies and love to learn new things. Enthusiastic and detail-oriented individual transitioning into the tech industry with hands-on experience from a software development boot camp which I graduated at a high standard. I am eager to bring my technical support background, problem-solving skills, and ability to communicate technical concepts to a new and challenging role in Web Development.
          </p>
        </section>

        <section id="animations" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white">
            A Few of the Languages I&apos;ve Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body overflow-auto">
                <h2 className="card-title">JavaScript Example</h2>
                <JavaScriptExample />
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body overflow-auto">
                <h2 className="card-title">HTML Example</h2>
                <HTMLExample />
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body overflow-auto">
                <h2 className="card-title">Next.js Example</h2>
                <NextJSExample />
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body overflow-auto">
                <h2 className="card-title">TypeScript Example</h2>
                <TypeScriptExample />
              </div>
            </div>
          </div>
        </section>

        <section id="tailwind-example" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white">
            Tailwind CSS Example
          </h2>
          <div className="flex justify-center mt-8">
            <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
              <div className="card-body overflow-auto">
                <TailwindExample />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 text-white">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src="/sparkle.jpeg"
                  alt="Project 1"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">the Sparkle Zone</h2>
                <p>
                  A project utilising nextjs and supabase to create blog posts
                  allowing comments using CRUD operations as well as including
                  things I enjoy and utilising as many of the skills learnt so
                  far during my Bootcamp with Tech Educators UK in Norwich..
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://the-sparkle-zone.vercel.app/"
                    className="btn btn-primary hover:bg-white hover:text-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src="/space.jpeg"
                  alt="Project 2"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nicky&apos;s Space</h2>
                <p>
                  A personal blog where where i have utilised react and express
                  to allow for posting blogs and comments
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://nickys-space.onrender.com/"
                    className="btn btn-primary hover:bg-white hover:text-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src="/nexus.png"
                  alt="The Nexus"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">The Nexus</h2>
                <p>
                  A Nextjs full stack site that serves as a companion for d&d players and dungeon masters a like this one will be ever expanding so watch out for these changes.
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://the-nexus.vercel.app/"
                    className="btn btn-primary hover:bg-white hover:text-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src="/monster.jpeg"
                  alt="Project 3"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Monster Smasher</h2>
                <p>
                  A fun clicker game where players can smash the monster and
                  earn points and buy upgrades. Built with React.
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://week-6-assignment-9lus.onrender.com/"
                    className="btn btn-primary hover:bg-white hover:text-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src="/week11.png"
                  alt="Project 4"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Week 11 Lessons</h2>
                <p>
                  A collection of lessons put to dynamic use including
                  useReducer, Object Oriented Programming, and Context.
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://week11-lessons-maybe.vercel.app/"
                    className="btn btn-primary hover:bg-white hover:text-black"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white">
            Contact Me
          </h2>
          <div className="flex justify-center mt-8">
            <a
              href="mailto:d.mortozacowles@gmail.com"
              className="btn btn-primary flex items-center space-x-2 hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m0 0l4-4m-4 4l4 4m-4-4h8"
                />
              </svg>
              <span>Email Me</span>
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="/cv.pdf"
              download
              className="btn btn-secondary flex items-center space-x-2 hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </section>

        <footer className="py-4 text-center text-white">
          <p>&copy; 2024 Nicky Mortoza-Cowles. All rights reserved.</p>
          <a href="#top" className="btn btn-primary mt-4">
            Return to Top
          </a>
        </footer>
      </div>
    </>
  );
}