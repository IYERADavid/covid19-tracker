import { Link } from 'react-router-dom'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Covid 19</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <Link to="/" className="nav-link" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/news" className="nav-link" >Recent News</Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/contact" className="nav-link" >Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header


