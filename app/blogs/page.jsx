import React, { Suspense } from "react";
import BlogList from "./BlogList";
import Loading from "../loading";

const Blogs = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>NBA Blogs</h2>
          <p>
            <small>Avaliable blogs for this moment</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </main>
  );
};

export default Blogs;
