import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Me
        </h1>

        <p className="text-gray-400 mb-12 max-w-xl">
          I am open to internships, collaborations, and learning opportunities.
          Feel free to reach out using the details below.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <ContactCard
            icon={<Mail size={26} />}
            title="Email"
            value="bubahanifa20@gmail.com"
          />

          <ContactCard
            icon={<Phone size={26} />}
            title="Phone"
            value="+234 8164142131,
            9113042753"
          />

          <ContactCard
            icon={<MapPin size={26} />}
            title="Location"
            value="Nigeria"
          />

        </div>
      </div>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6
    hover:border-purple-500 transition duration-300 text-center">
      <div className="text-purple-400 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {value}
      </p>
    </div>
  );
}
