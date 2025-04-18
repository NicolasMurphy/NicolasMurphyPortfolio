import { Link } from "react-router-dom";

export default function BlogPostCard({ post }) {
  return (
    <div className="fade-in-2 card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title mb-[2%] text-3xl">{post.title}</h2>
        <p className="text-sm text-base-content mb-[2%]">{post.summary}</p>
        <div className="card-actions justify-end">
          <Link to={`/blog/${post.slug}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
