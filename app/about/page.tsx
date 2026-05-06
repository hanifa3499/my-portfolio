import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I am a software engineering student with a strong interest in building
            practical, real-world applications using modern web technologies.
            My focus is on developing clean, scalable, and maintainable systems
            that solve real business problems.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I have hands-on experience working with Node.js , Laravel/PHP on the backend and
            modern frontend frameworks such as Next.js , Javascripts and React. Through
            personal and academic projects, I have built systems including
            management platforms, e-commerce-style applications, and service-based
            solutions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I am continuously improving my skills, learning best practices in
            full-stack development, and preparing for real-world software
            engineering environments where teamwork, problem-solving, and
            adaptability are essential.
          </p>

          {/* Highlight Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              PulseDev
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              Full-Stack Development
            </span>
            <span className="px-4 py-2 text-sm rounded-full bg-purple-600/20 text-purple-400">
              Node.js & Next.js
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>

          <div className="relative w-full h-[420px] rounded-xl overflow-hidden border border-gray-800">
            <Image
              src="/images/profile-me.jpg"
              alt="Profile image"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
