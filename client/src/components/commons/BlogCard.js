import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
  return (
    <div className={`card ${styles.blog_card} mb-5`}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.blogTitle}</h5>
        <p className="card-text">{props.blogContent}</p>
        <Link to={`/blogs/${props.blogTitle}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
