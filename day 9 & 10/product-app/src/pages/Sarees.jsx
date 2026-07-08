import saree1 from "../images/saree1.jpg";
import saree2 from "../images/saree2.jpg";
import saree3 from "../images/saree3.jpg";
import saree4 from "../images/saree4.jpg";
import saree5 from "../images/saree5.jpg";

function Sarees() {

  const products = [
    {
      image:saree1,
      name:"Designer Silk Saree",
      price:"₹1299",
      offer:"40% OFF",
      rating:"⭐ 4.5"
    },
    {
      image:saree2,
      name:"Cotton Saree",
      price:"₹899",
      offer:"30% OFF",
      rating:"⭐ 4.3"
    },
    {
      image:saree3,
      name:"Wedding Saree",
      price:"₹1999",
      offer:"50% OFF",
      rating:"⭐ 4.7"
    },
    {
      image:saree4,
      name:"Party Wear Saree",
      price:"₹1499",
      offer:"35% OFF",
      rating:"⭐ 4.4"
    },
    {
      image:saree5,
      name:"Traditional Saree",
      price:"₹1099",
      offer:"25% OFF",
      rating:"⭐ 4.6"
    }
  ];


  return(
    <div className="products">

      {products.map((item,index)=>(

        <div className="card" key={index}>

          <img src={item.image} alt={item.name}/>

          <h3>{item.name}</h3>

          <p>{item.rating}</p>

          <h3>{item.price}</h3>

          <span>{item.offer}</span>

          <button>Add to Cart</button>

        </div>

      ))}

    </div>
  )
}

export default Sarees;