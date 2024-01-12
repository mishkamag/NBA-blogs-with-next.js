import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:4000/blogs/${id}`);
  const blog = await response.json();

  return {
    title: `NBA Helpdesk | ${blog.title}`,
  };
};

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
