import { Link } from "react-router-dom";
import saree from "../images/saree1.jpg";
import kurti from "../images/kurti1.jpg";
import western from "../images/western1.jpg";
import halfsaree from "../images/halfsaree1.jpg";

function Home() {

  return (
    <div className="home">

      <h1>✨ Achu Fashion ✨</h1>

      <h2>Explore Our Collections</h2>

      <div className="categories">

        <div className="category">
          <img src={saree} alt="Saree" />
          <h3>Sarees</h3>
          <Link to="/sarees">View More</Link>
        </div>

        <div className="category">
          <img src={kurti} alt="Kurti" />
          <h3>Kurtis</h3>
          <Link to="/kurtis">View More</Link>
        </div>

        <div className="category">
          <img src={western} alt="Western" />
          <h3>Western Wear</h3>
          <Link to="/western">View More</Link>
        </div>

        <div className="category">
          <img src={halfsaree} alt="Half Saree" />
          <h3>Half Saree</h3>
          <Link to="/halfsaree">View More</Link>
        </div>

      </div>

    </div>
  );
}

export default Home;