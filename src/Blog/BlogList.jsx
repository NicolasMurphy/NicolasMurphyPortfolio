import { blogPosts } from "./BlogPosts";
import BlogPostCard from "./BlogPostCard";

export default function BlogList() {
  return (
    <div className="text-center md:mt-[2%] mt-[5%]">
      <h1 className="fade-in text-5xl md:text-7xl font-bold lg:mb-[3%] mb-[10%]">
        Blog
      </h1>
      <div className="mx-[30%]">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
