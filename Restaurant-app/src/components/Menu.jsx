import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

function Menu({ setCartCount, setTotalPrice, setCartItems, cartItems,removeFromCart,checkout,search,setSearch}) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
       <input type="text" placeholder="Search food " value={search}
       onChange={(e) => setSearch(e.target.value)}/>
     
      <div id="menu" className="food-container">
        {foodData.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            setCartCount={setCartCount}
            setTotalPrice={setTotalPrice}
            setCartItems={setCartItems}
          />
        ))}
      </div>

      <div id="cart" className="cart-items">
        <h2>Cart Items</h2>

        {cartItems.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <p>
                {item.name} - ₹{item.price}
            </p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}

        <h3>Total Items: {cartItems.length}</h3>
        <h3>
          Total Price: ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}
        </h3>

        <button
           className="checkout-btn"
            onClick={checkout}>
          Checkout
         </button>
      </div>

    </div>
  );
}

export default Menu;