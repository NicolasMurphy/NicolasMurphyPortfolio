import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogPosts";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p className="text-center mt-10">Post not found</p>;

  const PostComponent = post.component;
  return <PostComponent />;
}
