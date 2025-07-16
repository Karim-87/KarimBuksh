import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-sky-950 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-24">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-yellow-400 text-3xl md:text-5xl font-semibold">Hi, I am</h1>
        <h2 className="text-white text-4xl md:text-7xl font-extrabold mt-2">
          Karim Buksh
        </h2>
        <p className="mt-4 text-gray-300 text-lg md:text-2xl tracking-wide">
          Frontend Developer | Next.js | Tailwind CSS
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center  md:mb-0">
        <Image
          src="/image1.png"
          alt="Profile picture"
          width={100}
          height={100}
          className=" shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md object-cover"
        />
      </div>
    </section>
  );
}
