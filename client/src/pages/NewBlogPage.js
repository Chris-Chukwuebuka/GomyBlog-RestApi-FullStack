import NewBlog from "../components/blogComponents/NewBlog";

const NewBlogPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <NewBlog />
        <div className="col-lg-2"></div>
      </div>
    </section>
  );
};

export default NewBlogPage;
