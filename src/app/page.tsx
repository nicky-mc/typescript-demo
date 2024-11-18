"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicky&apos;s Portfolio</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-4xl font-bold text-white">
            Welcome to my Portfolio
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-white hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center text-center text-white py-20">
          <Image
            className="rounded-full border-4 border-white"
            src="/profile.jpeg"
            alt="Profile Picture"
            width={150}
            height={150}
          />
          <h2 className="text-5xl font-bold mt-4">
            Hello, I&apos;m Nicky Mortoza-Cowles
          </h2>
          <p className="text-xl mt-2">A passionate Web Developer</p>
          <a
            href="#projects"
            className="btn btn-primary mt-6 hover:bg-white hover:text-black"
          >
            View My Work
          </a>
          <Link
            href="/Pokemon"
            className="btn btn-secondary mt-4 hover:bg-white hover:text-black"
          >
            Go to Pokemon
          </Link>
        </main>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center text-white">
            About Me
          </h2>
          <p className="text-center text-white mt-4 max-w-2xl mx-auto">
            I&apos;m a student web developer with a passion for creating
            beautiful and functional websites. I have experience in various web
            technologies and love to learn new things.
          </p>
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
        </section>

        <footer className="py-4 text-center text-white">
          <p>&copy; 2024 Nicky Mortoza-Cowles. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}