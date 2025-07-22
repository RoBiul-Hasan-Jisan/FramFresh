//import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 pt-[125px] md:pt-[240px] w-full">
    <section className="min-h-[80vh] px-4 md:px-16 py-20 bg-gradient-to-br from-purple-950 via-black to-indigo-900 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Heading */}
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            About FrameFresh
          </h1>
          <p className="mt-4 text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            FrameFresh is a creative platform designed for modern digital storytellers. 
            Whether you’re a designer, developer, or dreamer — FrameFresh empowers you 
            to bring interactive 3D visuals, immersive experiences, and elegant web designs to life.
          </p>
        </div>

        {/* Mission Section */}
        <div className="animate-fade-in delay-150">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">🌟 Our Mission</h2>
          <p className="text-white/70 text-base sm:text-lg leading-loose">
            At FrameFresh, we believe technology should amplify creativity. 
            Our mission is to provide tools and templates that make it easy 
            to build stunning web experiences — blending 3D animation, responsive design, 
            and accessible code.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="animate-fade-in delay-300">
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">🚀 What Makes Us Different?</h2>
          <ul className="text-white/70 space-y-3 list-disc list-inside text-left max-w-3xl mx-auto text-base sm:text-lg">
            <li>
              ⚡ **Interactive 3D Integration** – powered by `react-three-fiber`, we make the web feel alive.
            </li>
            <li>
              🎨 **Advanced Styling** – stunning visuals with TailwindCSS, animations, and gradients.
            </li>
            <li>
              🧩 **Modular Design** – plug-and-play components for developers and designers alike.
            </li>
            <li>
              💡 **Creative Tools** – we offer customizable templates and layout kits for fast prototyping.
            </li>
          </ul>
        </div>

        {/* Philosophy Section */}
        <div className="animate-fade-in delay-500">
          <h2 className="text-2xl font-bold text-pink-400 mb-2">💬 Our Philosophy</h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            We believe in building technology that empowers — not overwhelms. 
            Every feature we build is rooted in simplicity, beauty, and performance. 
            FrameFresh is not just a tool; it’s a movement to make the web a more vibrant, expressive space.
          </p>
        </div>
      </div>
    </section>
    </main>
  );
}