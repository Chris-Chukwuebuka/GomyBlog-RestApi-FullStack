import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const params = useParams();

  const { blogTitle } = params;

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-8">
          <h1>{blogTitle}</h1>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default SingleBlog;
