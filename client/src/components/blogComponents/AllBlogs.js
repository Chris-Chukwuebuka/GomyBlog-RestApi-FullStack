import { useEffect } from "react";
import { useGetAllBlogsMutation } from "../../lib/apis/BlogApis";
import BlogCard from "../commons/BlogCard";

const AllBlogs = () => {
  

  const [
    getAllBlogs,
    { isError, error, data, isSuccess, isLoading }, // Destructuring the response object
  ] = useGetAllBlogsMutation();

  useEffect(() => {
    getAllBlogs(1);
  }, []);




  return (
    <div className="col-lg-6">
      {isError && <p>something went wrong</p>}
      {data?.blogs?.length > 0 &&
        data.blogs.map((blog) => {
          return (
            <BlogCard
              blogTitle={blog.title}
              blogContent={blog.content}
              key={blog._id}
            />
          );
        })}
    </div>
  );
};

export default AllBlogs;
