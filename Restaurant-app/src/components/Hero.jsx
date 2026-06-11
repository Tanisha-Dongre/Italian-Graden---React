function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src="https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D"
        alt="Italian Food"
      />

      <div className="hero-content">
        <h2>Authentic Italian Cuisine</h2>
      
        <p>
          Fresh Ingredients, handmade pasta, and classic Italian flavors.
        </p>
      
        <a href="#menu">
          <button>Order Now</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;