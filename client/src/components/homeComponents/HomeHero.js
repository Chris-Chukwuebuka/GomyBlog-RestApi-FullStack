import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero_img.jpg";
import styles from "./Home.module.css";

const HomeHero = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={heroImage} alt="hero_imge" className={styles.hero_img} />
        </div>
        <div className="col-lg-6">
          <h3>Since 2024</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            tempore repellendus earum odio delectus est magnam. Praesentium
            eveniet omnis debitis, quibusdam eligendi assumenda doloremque
            molestiae tempora! Porro veniam unde sit. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Sed tempore repellendus earum
            odio delectus est magnam. Praesentium eveniet omnis debitis,
            quibusdam eligendi assumenda doloremque molestiae tempora! Porro
            veniam unde sit. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Sed tempore repellendus earum odio delectus est magnam.
            Praesentium eveniet omnis debitis, quibusdam eligendi assumenda
            doloremque molestiae tempora! Porro veniam unde sit.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            tempore repellendus earum odio delectus est magnam. Praesentium
            eveniet omnis debitis, quibusdam eligendi assumenda doloremque
            molestiae tempora! Porro veniam unde sit. Lorem ipsum, dolor sit
            amet consectetur
          </p>

          <Link to="/about" className="btn btn-secondary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
