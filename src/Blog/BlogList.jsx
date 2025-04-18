import BlogPostCard from "./BlogPostCard";

const dummyPosts = [
  {
    title: "Exploring Protein Music",
    summary: "Turning spectra data into audio",
    slug: "exploring-protein-music",
  },
];

export default function BlogList() {
  return (
    <>
      <div className="text-center md:mt-[2%] mt-[5%]">
        <h1 className="fade-in text-5xl md:text-7xl font-bold lg:mb-[3%] mb-[10%]">
          Blog
        </h1>
        <div className="mx-[30%]">
          {dummyPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
