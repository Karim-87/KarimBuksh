"use client";

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="bg-gray-950 text-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
          My Projects
        </h1>

        {/* Category: AI & Vercel Web Projects */}
        <Section title="AI & Web Projects">
          {[
            {
              title: "AI Chatbot Assistant",
              desc: "AI Assistant to help teachers and students",
              link: "https://web-production-ffc11.up.railway.app/",
            },
            {
              title: "E-commerce App",
              link: "https://hackathon3-q2.vercel.app/",
            },
            {
              title: "Visual Resume",
              link: "https://visual-resume-nu.vercel.app/",
            },
            {
              title: "Figma UI Project",
              link: "https://figma-design-assignment-sigma.vercel.app/",
            },
            {
              title: "Product Cards",
              link: "https://product-card-responsive-gules.vercel.app/",
            },
            {
              title: "UI E-commerce",
              link: "https://uiux-hackthon-q2.vercel.app/",
            },
            {
              title: "Governor Sindh Webpage",
              link: "https://governor-sindh-web-page.vercel.app/",
            },
            {
              title: "useState Counter",
              link: "https://class-11-assignment-blue.vercel.app/",
            },
            {
              title: "Dynamic Resume",
              link: "https://dynamic-resume-sooty-eight.vercel.app/",
            },
            {
              title: "To-Do List App",
              link: "https://my-to-do-app-three.vercel.app/",
            },
          ].map((project) => (
    <ProjectCard key={project.title} {...project} />
  ))}
        </Section>

        {/* Category: Streamlit Python Projects */}
        <Section title="Python & Streamlit Projects">
          {[
            {
              title: "Unit Converter App",
              link: "https://unitconverterbykarim.streamlit.app/",
            },
            {
              title: "DataSweeper - Sterling Integrator",
              link: "https://karimbuskhpythonproject1.streamlit.app/",
            },
            {
              title: "Secure Data Encryption System",
              link: "https://karim-87-project5-secure-data-encryption-sys-secure-data-mewsls.streamlit.app/",
            },
            {
              title: "Personal Library Manager",
              link: "https://karim-87-personallibrary-manager-library-manager-rdny2y.streamlit.app/",
            },
            {
              title: "Password Strength Checker",
              link: "https://karim-87-password-strength-checker-password-strength-xcwesx.streamlit.app/",
            },
          ].map((project) => (
    <ProjectCard key={project.title} {...project} />
  ))}
        </Section>

        {/* Category: GitHub Projects */}
        <Section title="GitHub Repositories">
          {[
            {
              title: "AI Agents - Chainlit",
              link: "https://github.com/Karim-87/ai-agent-chanlit",
            },
            {
              title: "AI Agent (Chainlit)",
              link: "https://github.com/Karim-87/First_AI_agent.git",
            },
            {
              title: "Secure Data Encryption System",
              link: "https://github.com/Karim-87/Project5_Secure_Data_Encryption_System.git",
            },
            {
              title: "Calculator (HTML/CSS/TS)",
              link: "https://github.com/Karim-87/calculator_html_css_ts.git",
            },
            {
              title: "Figma Design Assignment",
              link: "https://github.com/Karim-87/FigmaDesignAssignment.git",
            },
            {
              title: "Product Card Responsive",
              link: "https://github.com/Karim-87/ProductCardResponsive.git",
            },
            {
              title: "Governor Sindh Web Page",
              link: "https://github.com/Karim-87/GovernorSindhWebPage.git",
            },
            {
              title: "Editable Dynamic Resume",
              link: "https://github.com/Karim-87/EditableDynamicResume.git",
            },
            {
              title: "Dynamic Resume",
              link: "https://github.com/Karim-87/DynamicResume.git",
            },
            {
              title: "Visual Resume",
              link: "https://github.com/Karim-87/VisualResume.git",
            },
          ].map((project) => (
    <ProjectCard key={project.title} {...project} />
  ))}
        </Section>
      </div>
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white border-l-4 border-yellow-400 pl-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  link,
  desc,
}: {
  title: string;
  link: string;
  desc?: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
    >
      <h3 className="text-lg font-bold text-yellow-400 mb-2">{title}</h3>
      <p className="text-sm text-gray-300">
        {desc || "View live project"}
      </p>
    </Link>
  );
}
