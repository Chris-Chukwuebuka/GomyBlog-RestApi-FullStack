import AllBlogs from "../components/blogComponents/AllBlogs";

const BlogsPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <AllBlogs />
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default BlogsPage;
