/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  ExternalLink,
  Code2,
  Terminal,
  FolderOpen,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* 1. Header / Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-white font-heading font-bold text-xl tracking-tight"
          >
            [Edgar Cabeza]<span className="text-indigo-500">.</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Mobile Menu Button Placeholder */}
          <button className="md:hidden text-slate-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="pt-16">
        {/* 2. Hero Section */}
        <section
          id="hero"
          className="min-h-[85vh] flex items-center justify-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-indigo-400 bg-indigo-950/50 border border-indigo-500/20 px-4 py-1.5 rounded-full text-sm font-medium block w-max mx-auto mb-6">
                Hello, World! 👋
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">[Edgar]</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Computer Science Student | Software & Web Developer
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
                >
                  View Projects <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. About Me Section */}
        <section id="about" className="py-24 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <Terminal className="text-indigo-500" /> About Me
              </h2>
              <div className="bg-slate-800/50 border border-slate-700 text-lg leading-relaxed p-6 md:p-8 rounded-2xl text-slate-300 shadow-xl">
                {/* Placeholder text: Replace this with your actual summary */}
                <p>
                  I'm a passionate 3rd-year Computer Science student actively seeking progress opportunities. Throughout my academics, I have developed a solid foundation in programming logic, modern web frameworks, and application architecture. I am eager to apply my academic knowledge to real-world projects, learn from industry professionals, and contribute meaningfully to a professional tech team.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 flex items-center gap-3">
                <Code2 className="text-indigo-500" /> My Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                  <h3 className="text-white font-medium mb-4 text-lg">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'Java', 'C++', 'GDScript', 'HTML 5'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-800 outline outline-1 outline-slate-700 text-slate-300 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                  <h3 className="text-white font-medium mb-4 text-lg">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['CSS', 'Bootstrap', 'Vite', 'React'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-indigo-950/30 text-indigo-300 outline outline-1 outline-indigo-500/30 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend & Databases */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                  <h3 className="text-white font-medium mb-4 text-lg">Backend & Databases</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Spring Boot'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-800 outline outline-1 outline-slate-700 text-slate-300 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'PostgreSQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-800 outline outline-1 outline-slate-700 text-slate-300 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Other */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                  <h3 className="text-white font-medium mb-4 text-lg">Tools & Other</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Figma', 'Git', 'GitHub', 'Godot', 'VS Code', 'Trello'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-800 outline outline-1 outline-slate-700 text-slate-300 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Adobe Photoshop', 'Blender'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-slate-800 outline outline-1 outline-slate-700 text-slate-300 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Projects Section (CRITICAL CSS Grid) */}
        <section id="projects" className="py-24 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 flex items-center gap-3">
                <FolderOpen className="text-indigo-500" /> Featured Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Project Card 1 */}
                <div className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="/img/UniCode.png" 
                      alt="UniCode Thumbnail"   
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-indigo-400 mb-2 tracking-wide uppercase">Software/AI</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">UniCode: Gamified Logic Learning Tool</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      An interactive gaming platform designed to teach foundational programming logic to beginners, leveraging artificial intelligence for personalized hints and feedback.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">Godot</span>
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">Python</span>
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">Gemini AI</span>
                    </div>
                    <a href="https://github.com/alex-daniel-ue/unicode" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-indigo-600 px-4 py-2.5 rounded-lg w-fit transition-colors">
                      View Project / Code <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="/img/webdev.png" 
                      alt="Web Dev Projects Thumbnail" 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-indigo-400 mb-2 tracking-wide uppercase">Web Development</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">Web Development Projects</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      A diverse collection of front-end web development projects showcasing responsive layouts, interactive user interfaces, and clean, modular code architecture.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">HTML</span>
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">CSS</span>
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">JavaScript</span>
                    </div>
                    <a href="https://chikiditch.github.io/Web-Development-Journey/" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-indigo-600 px-4 py-2.5 rounded-lg w-fit transition-colors">
                      View Project / Code <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Card 3 */}
                <div className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="/img/1labeled.png" 
                      alt="3D Design Thumbnail" 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-indigo-400 mb-2 tracking-wide uppercase">3D Modeling</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">3D Environment & Asset Design</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      Detailed 3D environments, low-poly models, and textured assets designed for various interactive media, game prototypes, and visual rendering projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">Blender</span>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1xDdJj7LuQVFZd9YuEqCBz-H88kj9VMXy?usp=sharing" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-indigo-600 px-4 py-2.5 rounded-lg w-fit transition-colors">
                      View Project / Code <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Card 4 */}
                <div className="group bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src="/img/magazine cover.png" 
                      alt="Graphic Design Thumbnail" 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-indigo-400 mb-2 tracking-wide uppercase">Graphic Design</div>
                    <h3 className="text-xl font-heading font-bold text-white mb-3">Digital Graphics & UI Mockups</h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      Custom digital graphics, high-fidelity wireframes, typography design, and user interface mockups tailored for software products and client websites.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md">Adobe Photoshop</span>
                    </div>
                    <a href="https://drive.google.com/drive/folders/1tRaIUpyxqeQ38FZpVoX0p39GmCw0RdwO?usp=sharing" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-indigo-600 px-4 py-2.5 rounded-lg w-fit transition-colors">
                      View Project / Code <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                Let's Build Something.
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Currently looking for an internship or OJT position. Whether you have an opportunity or just want to say hi, my inbox is always open!
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:[chikid.work@gmail.com]"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-indigo-500 text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>[chikid.work@gmail.com]</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/edgar-cabeza-521bb9404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-indigo-500 text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Linkedin className="w-5 h-5 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/chikiditch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-indigo-500 text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Github className="w-5 h-5 text-indigo-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-900/50">
        <p className="text-sm">
          © {new Date().getFullYear()} [Edgar Cabeza]. Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
