import western1 from "../images/western1.jpg";
import western2 from "../images/western2.jpg";
import western3 from "../images/western3.jpg";
import western4 from "../images/western4.jpg";
import western5 from "../images/western5.jpg";

function Western() {

  return (
    <div className="products">

      <div className="card">
        <img src={western1} alt="Western Dress" />
        <h3>Floral Western Dress</h3>
        <p>⭐ 4.5</p>
        <h3>₹899</h3>
        <span>40% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={western2} alt="Western Dress" />
        <h3>Party Wear Dress</h3>
        <p>⭐ 4.4</p>
        <h3>₹1299</h3>
        <span>35% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={western3} alt="Western Dress" />
        <h3>Casual Western Wear</h3>
        <p>⭐ 4.3</p>
        <h3>₹799</h3>
        <span>30% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={western4} alt="Western Dress" />
        <h3>Designer Gown</h3>
        <p>⭐ 4.6</p>
        <h3>₹1499</h3>
        <span>45% OFF</span>
        <button>Add to Cart</button>
      </div>


      <div className="card">
        <img src={western5} alt="Western Dress" />
        <h3>Long Maxi Dress</h3>
        <p>⭐ 4.5</p>
        <h3>₹999</h3>
        <span>25% OFF</span>
        <button>Add to Cart</button>
      </div>

    </div>
  );
}

export default Western;