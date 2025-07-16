export default function AboutPage() {
  return (
    <section className="bg-gray-950 text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center">
          ✨ About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          Hello! I’m <span className="text-white font-semibold">Karim Buksh</span>, a passionate Frontend Developer, Creative Educator, and Nature-loving Content Creator from Karachi, Pakistan.
        </p>

        {/* Developer Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">💻 Developer by Passion</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            I specialize in <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">Tailwind CSS</span>, <span className="text-white font-medium">TypeScript</span>, and modern frontend tools to build fast, responsive, and user-friendly web applications.
            I love turning ideas into real, impactful digital experiences — from AI-powered assistants to e-commerce platforms and visual resumes.
            Whether it’s crafting clean code or solving real-world problems through intuitive UI/UX, I’m always excited to push boundaries and keep learning.
          </p>
        </div>

        {/* Teacher Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">👨‍🏫 Teacher by Heart</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            By profession, I proudly serve as the <span className="text-white font-medium">Incharge Head Master at GBELSS Nazar Muhammad Gabol, Gadap, Karachi</span>.
            I’m deeply committed to empowering students through creativity, critical thinking, and technology.
            My educational journey has led me to conduct research on developing motor skills and creativity through art in young learners,
            while also modernizing teaching using AI tools.
          </p>
        </div>

        {/* Creator Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">🎥 Creator by Soul</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Outside the classroom and code editor, I run a YouTube channel called <span className="text-white font-medium">“Pet Animals and Birds”</span>
            where I share the natural beauty of village life, wildlife, and moments of joy between humans and animals.
            I’m also an advocate for animal care and environmental respect,
            blending storytelling with my camera work to highlight the harmony of nature.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">🚀 My Mission</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            To become a successful entrepreneur, role model teacher, lifelong learner, and creative storyteller — blending technology, education,
            and passion to make a lasting impact.
          </p>
        </div>

        {/* Optional Footer CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400">📩 Let’s connect and collaborate!</p>
        </div>

      </div>
    </section>
  );
}
