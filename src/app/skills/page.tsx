export default function SkillsPage() {
  return (
    <section className="bg-gray-950 text-white min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-6">
          🚀 My Skills
        </h1>
        <p className="text-gray-300 text-center text-lg max-w-2xl mx-auto">
          Here’s a breakdown of my technical, creative, and professional skill set that empowers me as a developer, educator, and creator.
        </p>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* Developer Skills */}
          <SkillCard title="💻 Frontend Development" skills={[
            "Next.js", "Tailwind CSS", "TypeScript", "HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX"
          ]} />

          {/* Teacher/Education Skills */}
          <SkillCard title="👨‍🏫 Education & Leadership" skills={[
            "Teaching", "Lesson Planning", "Educational Research", "Creativity Development", "Classroom Management", "AI in Education"
          ]} />

          {/* Creative Content Creator */}
          <SkillCard title="🎥 Content Creation" skills={[
            "YouTube Management", "Script Writing", "Animal & Nature Photography", "Storytelling", "Video Editing", "Digital Communication"
          ]} />

          {/* Technical Tools / Others */}
          <SkillCard title="🧠 Other Tools & Technologies" skills={[
            "Git & GitHub", "Streamlit", "Figma", "AI Assistants", "Google Workspace", "VS Code"
          ]} />

        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-yellow-400/20 transition">
      <h2 className="text-xl font-semibold text-yellow-400 mb-4">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-300 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
