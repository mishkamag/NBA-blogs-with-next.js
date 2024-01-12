import { notFound } from "next/navigation";

const getBlog = async (id) => {
  const res = await fetch(`http://localhost:4000/blogs/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
};

const BlogDetails = async ({ params }) => {
  const blog = await getBlog(params.id);

  return (
    <main>
      <nav>
        <h2>Blog Details</h2>
      </nav>
      <div className="card">
        <h3>{blog.title}</h3>
        <small>Created By {blog.user_email}</small>
        <p>{blog.body}</p>
        <div className={`pill ${blog.priority}`}>{blog.priority} priority</div>
      </div>
    </main>
  );
};

export default BlogDetails;
