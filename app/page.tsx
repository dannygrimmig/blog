import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Home</h1>
      <p className="mb-4">text for home page here...</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
