import Gallery from '../components/Gallery'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'

function About() {
  const galleryImages = [
    { src: img1, alt: 'Mediterranean restaurant interior' },
    { src: img2, alt: 'Middle Eastern mezze platter' },
    { src: img3, alt: 'Signature grilled dish' },
    { src: img4, alt: 'Elegant table presentation' },
    { src: img5, alt: 'Warm dining atmosphere' },
    { src: img6, alt: 'Shared appetizer spread' },
    { src: img7, alt: 'Fresh grilled kebab platter' },
    { src: img8, alt: 'Dessert and tea presentation' },
    { src: img9, alt: 'Modern Middle Eastern cuisine' },
    { src: img10, alt: 'Restaurant detail and plating' },
  ]

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">About</h1>
      <p className="text-secondary mb-4">
        A modern Middle Eastern dining experience with bold flavors, warm hospitality, and a menu built for sharing.
      </p>

      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h3>Our Story</h3>
              <p className="text-secondary mb-0">
                Sumac House is inspired by Middle Eastern dining culture where meals are generous,
                colorful, and meant to bring people together. The menu focuses on mezze, fresh breads,
                grilled mains, and desserts that feel both comforting and memorable.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h3>What People Love</h3>
              <p className="text-secondary mb-0">
                Guests usually start with hummus, labneh, or fire-roasted eggplant, then move into
                grilled fish, lamb, or seasonal vegetables. Kunefe and Turkish coffee are the usual finish,
                especially if you want the full experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Gallery images={galleryImages} title="Gallery" />
    </div>
  )
}

export default About