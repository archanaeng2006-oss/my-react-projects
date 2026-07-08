import kurti1 from "../images/kurti1.jpg";
import kurti2 from "../images/kurti2.jpg";
import kurti3 from "../images/kurti3.jpg";
import kurti4 from "../images/kurti4.jpg";
import kurti5 from "../images/kurti5.jpg";

function Kurtis() {

  return (
    <div className="products">

      <div className="card">
        <img src={kurti1} alt="Kurti" />
        <h3>Designer Kurti</h3>
        <p>⭐ 4.5</p>
        <h3>₹799</h3>
        <span>40% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={kurti2} alt="Kurti" />
        <h3>Cotton Kurti</h3>
        <p>⭐ 4.4</p>
        <h3>₹599</h3>
        <span>35% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={kurti3} alt="Kurti" />
        <h3>Floral Kurti</h3>
        <p>⭐ 4.3</p>
        <h3>₹699</h3>
        <span>30% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={kurti4} alt="Kurti" />
        <h3>Party Wear Kurti</h3>
        <p>⭐ 4.6</p>
        <h3>₹999</h3>
        <span>45% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={kurti5} alt="Kurti" />
        <h3>Long Kurti</h3>
        <p>⭐ 4.5</p>
        <h3>₹899</h3>
        <span>25% OFF</span>
        <button>Add to Cart</button>
      </div>

    </div>
  );
}

export default Kurtis;