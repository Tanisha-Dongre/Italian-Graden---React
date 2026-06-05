function Navbar({
  cartCount,
  username,
  setUsername,
  setShowLogin
}) {
  return (
    <nav>
      <h1>Italian Garden</h1>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>

        <li>
          <a href="#cart">Cart ({cartCount})</a>
        </li>

        {username ? (
          <>
            <li>
              Hi, {username}
            </li>

            <li
              onClick={() => setUsername("")}
              style={{ cursor: "pointer" }}
            >
              Logout
            </li>
          </>
        ) : (
          <li
            onClick={() => setShowLogin(true)}
            style={{ cursor: "pointer" }}
          >
            Login
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;