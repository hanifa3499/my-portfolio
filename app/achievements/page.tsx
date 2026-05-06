import { Award, BookOpen, Trophy } from "lucide-react";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Achievements & Certifications
        </h1>

        <p className="text-gray-400 mb-14 max-w-2xl">
          A summary of academic milestones, certifications, and accomplishments
          gained during my journey as a software engineer/developer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Achievement Card */}
          <AchievementCard
            icon={<BookOpen size={28} />}
            title="Software Engineering Student"
            description="Currently studying software engineering with a focus on full-stack web development."
          />

          <AchievementCard
            icon={<Award size={28} />}
            title="Backend Development Projects"
            description="Built Node.js , Laravel ,  applications using REST APIs, authentication, and database integration."
          />

          <AchievementCard
            icon={<Trophy size={28} />}
            title="Personal Portfolio Website"
            description="Designed and developed a modern portfolio using Next.js, Tailwind CSS, and best UI practices."
          />

          <AchievementCard
            icon={<Award size={28} />}
            title="Database Design Experience"
            description="Designed and implemented MySQL databases with proper relationships and optimized queries."
          />

          <AchievementCard
            icon={<BookOpen size={28} />}
            title="Continuous Learning"
            description="Actively learning modern tools, frameworks, and best practices in software engineering."
          />

        </div>
      </div>
    </main>
  );
}

function AchievementCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6
    hover:border-purple-500 transition duration-300">
      <div className="text-purple-400 mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
