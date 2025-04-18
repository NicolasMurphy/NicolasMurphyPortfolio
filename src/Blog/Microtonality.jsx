import { Link } from "react-router-dom";

export default function Microtonality() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 mt-16 fade-in">
      <h1 className="text-4xl font-bold mb-6">Microtonality</h1>
      <p className="mb-6 italic text-base-content/70">The future of music</p>

      <div className="space-y-5 leading-relaxed text-base-content text-lg">
        <p>paragraph</p>
      </div>

      <div className="text-center mt-10">
        <Link to="/blog" className="btn btn-sm mb-10">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
