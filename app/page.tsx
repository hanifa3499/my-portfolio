"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone, Github, Linkedin, Award, BookOpen, Trophy } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0512] selection:bg-purple-500/30">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/20 blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-10 z-10 pt-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Digital</span> Experiences
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I&apos;m a Full-Stack Software Engineering student specializing in building scalable web applications, sleek user interfaces, and robust backend systems.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                View My Work
              </Link>
              <Link href="#contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative hidden md:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full blur-[80px] opacity-50 animate-pulse"></div>
              <Image 
                src="/images/profile-me.jpg" 
                alt="Profile" 
                fill 
                className="object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6 md:px-10 z-10 bg-black/40 border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full transition-all duration-500 group-hover:bg-purple-600/30"></div>
               <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image src="/images/profile-me.jpg" alt="About me" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate software engineering student dedicated to building practical, real-world applications that solve actual problems. With a keen eye for design and a focus on clean architecture, I strive to create exceptional digital experiences.
              </p>
              <p>
                My expertise spans the full stack, working with robust backend frameworks like Node.js and Laravel/PHP, seamlessly integrated with modern, reactive frontends using React and Next.js.
              </p>
              <p>
                Whether it&apos;s designing a complex relational database or crafting a pixel-perfect user interface, I approach every engineering challenge with curiosity and a commitment to best practices.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-6">
                {['Full-Stack Development', 'UI/UX Design', 'Database Architecture', 'REST APIs'].map((tag, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 md:px-10 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Tools, languages, and frameworks I use to bring ideas to life.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp}>
              <SkillCard title="Backend Development" skills={["Node.js", "Laravel/PHP", "Express.js", "RESTful APIs", "Authentication (JWT)", "API Security"]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard title="Frontend Development" skills={["Javascript / TypeScript", "Next.js", "React.js", "Tailwind CSS", "Responsive Design", "Framer Motion"]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard title="Database & Storage" skills={["MySQL", "PostgreSQL", "Database Design", "Prisma ORM", "Relational Data Modeling"]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard title="Tools & Workflow" skills={["Git & GitHub", "Docker", "Postman / Insomnia", "Vercel / Netlify", "CI/CD Basics"]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard title="Problem Solving" skills={["Algorithms", "System Design Thinking", "Performance Optimization", "Debugging", "Quality Assurance"]} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard title="Core Skills" skills={["Team Collaboration", "Technical Documentation", "Agile Methodologies", "Continuous Learning"]} />
            </motion.div>
          </div>
        </motion.div>  
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-24 px-6 md:px-10 z-10 bg-black/40 border-y border-white/5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Milestones & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="text-purple-400" size={32} />, title: "Software Engineering", desc: "Currently excelling in software engineering studies with a massive focus on modern web tech." },
              { icon: <Award className="text-purple-400" size={32} />, title: "Full-Stack Excellence", desc: "Successfully delivered complex monolithic and decoupled applications using Laravel and Node.js." },
              { icon: <Trophy className="text-purple-400" size={32} />, title: "System Architecture", desc: "Architected scalable MySQL databases handling relationships, transactions, and optimized queries." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 md:px-10 z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent projects blending complex logic with intuitive interfaces.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: { id: number, title: string, description: string, technologies: string[], image: string, githubUrl?: string }) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  darkMode={true}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 md:px-10 z-10 bg-black/60 border-t border-white/5">
        <div className="absolute inset-0 bg-[url('/projects/projects-bg.jpg')] bg-cover opacity-5 mix-blend-overlay"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">I&apos;m currently seeking new opportunities and open to exciting projects or collaborations.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 backdrop-blur border border-white/5 rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:bubahanifa20@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">bubahanifa20@gmail.com</a>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur border border-white/5 rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+234 816 414 2131 <br/> +234 911 304 2753</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur border border-white/5 rounded-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/5">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Nigeria</p>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PulseDev. All rights reserved. Built with Next.js & Tailwind.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
