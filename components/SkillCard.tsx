type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="relative group rounded-2xl p-1 overflow-hidden transition-all duration-500 hover:scale-[1.02]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-indigo-600/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card Content */}
      <div className="relative h-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-gray-900/80 group-hover:border-purple-500/50">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-5">
          {title}
        </h3>

        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></span>
              <span className="font-medium tracking-wide">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
