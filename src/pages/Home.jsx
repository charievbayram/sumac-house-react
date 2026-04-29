import { Link } from 'react-router-dom'
import heroImg from '../assets/home-hero.jpg'
import kunefeImg from '../assets/kunefe.jpg'
import lambImg from '../assets/lamb-terracotta.jpg'
import mezzeImg from '../assets/hero.jpg'

function Home() {
  return (
    <div>
      <header
        className="hero-section d-flex align-items-center text-light"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.42), rgba(0,0,0,.62)), url(${heroImg})`
        }}
      >
        <div className="container hero-container">
            <div className="hero-box luxury-hero-box">
            <div className="hero-tags mt-3">
                <span className="hero-tag">Mezze</span>
                <span className="hero-tag">Wood Grills</span>
                <span className="hero-tag">Desserts</span>
                <span className="hero-tag">Coffee & Tea</span>
            </div>

            <p className="hero-label mb-2">MODERN MIDDLE EASTERN DINING</p>
            <h1 className="display-2 fw-bold mb-3">Sumac House</h1>
            <p className="lead mb-4">
              A warm, modern restaurant experience built around mezze, taboon bread,
              wood-style grills, and elegant dishes meant to be shared.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/menu" className="btn btn-warning btn-lg px-4">View Menu</Link>
              <Link to="/about" className="btn btn-outline-light btn-lg px-4">Our Story</Link>
            </div>
          </div>
        </div>
      </header>

      <section className="container py-5">
        <h2 className="fw-bold mb-3">Popular Picks</h2>
        <p className="text-secondary">Stuff people order a lot.</p>

        <div className="row g-4 mt-1">
          <div className="col-md-6 col-xl-4">
            <div className="card h-100 bg-dark text-light border-secondary overflow-hidden">
              <img
                src={mezzeImg}
                className="card-img-top food-img"
                alt="Mezze platter"
              />
              <div className="card-body">
                <h4>Hummus & Mezze</h4>
                <p className="text-secondary">
                  Creamy hummus, olives, vegetables, and warm bread made for sharing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="card h-100 bg-dark text-light border-secondary overflow-hidden">
              <img
                src={lambImg}
                className="card-img-top food-img"
                alt='Lamb Kofta Kebab "Terracotta"'
              />
              <div className="card-body">
                <h4>Lamb Kofta Kebab “Terracotta”</h4>
                <p className="text-secondary">
                  Tomato confit, charred onions, tahini, pine nuts, and flatbread dome.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="card h-100 bg-dark text-light border-secondary overflow-hidden">
              <img
                src={kunefeImg}
                className="card-img-top food-img"
                alt="Kunefe"
              />
              <div className="card-body">
                <h4>Kunefe</h4>
                <p className="text-secondary">
                  Crispy kataifi, melted cheese, syrup, and pistachio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home