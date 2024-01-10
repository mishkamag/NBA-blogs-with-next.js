const getBlogs = async () => {
  const res = await fetch("http://localhost:4000/blogs", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
};

const BlogList = async () => {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      {blogs.map((blog) => (
        <div className="card my-5" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.body.slice(0, 205)}...</p>
          <div className={`pill ${blog.priority}`}>
            {blog.priority} priority
          </div>
        </div>
      ))}
      {blogs.length === 0 && <p className="text-centre">There are no blogs</p>}
    </>
  );
};

export default BlogList;
