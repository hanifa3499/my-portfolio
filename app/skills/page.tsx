import SkillCard from "@/components/SkillCard";


export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h1>

        <p className="text-gray-400 mb-14 max-w-2xl">
          These are the technical skills I have developed as a software engineering student
          through academic work and hands-on projects.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Backend Development"
            skills={[
              "Node.js",
               "Laravel/PHP",
              "Express.js",
              "RESTful APIs",
              "Authentication (JWT)",
              "API Security",
            ]}
          />

          <SkillCard
            title="Frontend Development"
            skills={[
              "Javascript",
              "Next.js",
              "React.js",
              "Tailwind CSS/CSS",
              "Responsive Design",
              "Component-Based Architecture",
            ]}
          />

          <SkillCard
            title="Database & Storage"
            skills={[
              "MySQL",
              "Database Design",
              "CRUD Operations",
              "Relational Data Modeling",
            ]}
          />

          <SkillCard
            title="Tools & Workflow"
            skills={[
              "Git & GitHub",
              "VS Code",
              "Postman / Thunder Client",
              "Netlify Deployment",
            ]}
          />

          <SkillCard
            title="Problem Solving"
            skills={[
              "Debugging",
              "System Design Thinking",
              "Performance Optimization",
              "Quality Assurance",
            ]}
          />

          <SkillCard
            title="Soft Skills"
            skills={[
              "Team Collaboration",
              "Technical Documentation",
              "Time Management",
              "Continuous Learning",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
