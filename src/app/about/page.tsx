export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-6">
        About Me
      </h1>

      <p className="text-black-400 leading-8">
        I'm Areej, a passionate frontend developer specializing in Next.js and modern web technologies.
        I build clean, responsive and scalable web applications including e-commerce platforms.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6">

        <div className="bg-black-900 p-6 rounded">
          <h2 className="font-semibold mb-2">Skills</h2>
          <p className="text-black-400">Next.js, React, Prisma, Tailwind CSS</p>
        </div>

        <div className="bg-black-900 p-6 rounded">
          <h2 className="font-semibold mb-2">Experience</h2>
          <p className="text-black-400">Building full-stack web apps</p>
        </div>

      </div>

    </div>
  )
}