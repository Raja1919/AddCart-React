
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand p-2  fs-4" href="/">
          Navbar
        </a>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mx-4">
            <li className="nav-item ">
              <a className="nav-link active text-white" aria-current="page" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">
                enterprises
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">
                support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/">
                pricing
              </a>
            </li>
          </ul>
          {/* <form class="d-flex "> */}
            <button class="btn btn-outline-dark mx-4" type="submit">
              <i class="bi-cart-fill "></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          {/* </form> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
