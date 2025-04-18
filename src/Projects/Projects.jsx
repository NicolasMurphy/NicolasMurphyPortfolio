const projects = [
  {
    title: "SongSeeker",
    description:
      "SongSeeker is a music education geography game! Featuring music from over 150 countries!",
    repo: "https://github.com/NicolasMurphy/songseeker-beta",
    tags: ["TypeScript", "Game", "Music"],
  },
  {
    title: "My Portfolio (this one!)",
    description:
      "My portfolio showcasing my projects. Features a random Spotify track generator, using Spotify's API.",
    repo: "https://github.com/NicolasMurphy/NicolasMurphyPortfolio",
    tags: ["JavaScript", "Blog", "Spotify API"],
  },
  {
    title: "Mass Spectrum to Audio Converter",
    description:
      "A project for converting mass spectrum .txt files into .wav files.",
    repo: "https://github.com/NicolasMurphy/mass-spectrum-to-audio-converter",
    blog: "/blog/mass-spectrometry-music",
    tags: ["Python", "Audio", "Experimental"],
  },
  {
    title: "BookBounty",
    description:
      "Discover your favorite books! A Hack Reactor project using FastAPI, MongoDB, React, Redux, and Docker.",
    repo: "https://github.com/NicolasMurphy/BookBounty",
    tags: ["Python", "FastAPI", "MongoDB"],
  },
  {
    title: "CarCar",
    description:
      "An automobile dealership management web app. A Hack Reactor project using Django, React, and Docker.",
    repo: "https://github.com/NicolasMurphy/CarCar",
    tags: ["Django", "React", "Docker"],
  },
  {
    title: "Appointment Tracker",
    description:
      "An appointment tracker developed as a learning experience for PHP. Uses PHP, MySQL, TypeScript, and Docker.",
    repo: "https://github.com/NicolasMurphy/appointment_tracker",
    tags: ["PHP", "MySQL", "TypeScript"],
  },
  {
    title: "My First Plugin",
    description: "JUCE-powered comb filter inspired by Reason’s Thor.",
    repo: "https://github.com/NicolasMurphy/MyFirstPlugin",
    tags: ["C++", "Audio", "VST"],
  },
  {
    title: "Music Visualizer",
    description:
      "A audio reactive music visualizer utilizing Three.js, utilizes microphone input.",
    repo: "https://github.com/NicolasMurphy/Music-Visualizer",
    tags: ["TypeScript", "Three.js", "Audio"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0 md:mt-[2%] mt-[5%] fade-in">
      <h1 className="text-7xl font-bold mb-16 text-center">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-base-300"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">
                {project.title}
              </h2>
              <p className="text-sm text-base-content/80 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline badge-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-actions justify-end">
                {project.blog && (
                  <a href={project.blog} className="btn btn-sm btn-secondary">
                    Read Blog
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}
