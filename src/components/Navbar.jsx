import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function Navbar() {
  const location = useLocation()
  const collapseRef = useRef(null)

  useEffect(() => {
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      collapseRef.current.classList.remove('show')
    }
  }, [location])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-secondary-subtle">
      <div className="container">
        <Link className="navbar-brand fw-bold brand-title" to="/">
          SUMAC HOUSE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNav"
          ref={collapseRef}
        >
          <div className="navbar-nav ms-auto gap-lg-3 text-end text-lg-start">
            <NavLink className="nav-link nav-link-custom" to="/">Home</NavLink>
            <NavLink className="nav-link nav-link-custom" to="/menu">Menu</NavLink>
            <NavLink className="nav-link nav-link-custom" to="/about">About</NavLink>
            <NavLink className="nav-link nav-link-custom" to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar