import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  darkMode?: boolean;
}

export default function ProjectCard({ title, description, technologies, image, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/5 transition-all duration-500 bg-gray-900 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)]">
      {/* Image container */}
      <div className="relative h-60 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
        <Image 
          src={image} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 p-6 bg-gray-900/90 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-purple-300 shadow-sm shadow-purple-900/20">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {githubUrl && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.19-.34 6.52-1.58 6.52-7.02 0-1.53-.54-2.86-1.43-3.92.15-.38.63-1.86-.14-3.86 0 0-1.2-.38-3.9 1.45a13.4 13.4 0 0 0-7 0c-2.7-1.83-3.9-1.45-3.9-1.45-.77 2-.29 3.48-.14 3.86-.89 1.06-1.43 2.39-1.43 3.92 0 5.44 3.33 6.68 6.52 7.02a4.8 4.8 0 0 0-1 3.02v4"></path>
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
