import Link from "next/link";

const getBlogs = async () => {
  //just for show spinner
  await new Promise((res) => setTimeout(res, 3000));

  const res = await fetch("http://localhost:4000/blogs", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

const BlogList = async () => {
  const blogs = await getBlogs();
  return (
    <>
      {blogs.map((blog) => (
        <div className="card my-5 hover:hover:shadow-lg" key={blog.id}>
          <Link href={`blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>{blog.body.slice(0, 205)}...</p>
            <div className={`pill ${blog.priority}`}>
              {blog.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {blogs.length === 0 && <p className="text-centre">There are no blogs</p>}
    </>
  );
};

export default BlogList;
