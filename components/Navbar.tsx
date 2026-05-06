import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between bg-black/40 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50 transition-all duration-300">
      {/* Logo / Name */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-50"></div>
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="relative rounded-full border border-purple-500/30"
          />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          PulseDev
        </span>
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        <li>
          <Link href="#home" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all">
            About Me
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#achievements" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all">
            Achievements
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all">
            Projects
          </Link>
        </li>
      </ul>
      
      <div className="hidden md:block">
        <Link 
          href="#contact" 
          className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </nav>
  );
}
