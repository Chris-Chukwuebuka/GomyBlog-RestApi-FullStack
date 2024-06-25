import { useState, useEffect } from "react";
import BlogCard from "../commons/BlogCard";
import generateBlogObjects from "../../lib/apis/BlogApis";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <section className="container mt-5">
      <div className="row">
        <h3 className="text-center">Recent Blogs</h3>
        {blogs.length > 0 &&
          blogs.map((blog) => {
            return (
              <div className="col-lg-4" key={blog.id}>
                <BlogCard blogTitle={blog.title} blogContent={blog.content} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default RecentBlogs;
