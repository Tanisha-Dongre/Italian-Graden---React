import { useState } from "react";
function FoodCard(props) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    props.setCartCount((prev) => prev + 1);
    props.setTotalPrice((prev) => prev + props.price); 
    props.setCartItems((prev) => [
    ...prev,
    {
      name: props.name,
      price: props.price
    }
    ]); 
    setAdded(true);
    };

  return (
    <div className="food-card">
      <img src={props.image} alt={props.image} />
      <h3>{props.name}</h3>
      <p>₹{props.price}</p>
      <button onClick={handleAddToCart}>
      {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default FoodCard;