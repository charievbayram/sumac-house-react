function Contact() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">Contact</h1>
      <p className="text-secondary">Send a message or find us on the map.</p>

      <div className="row g-4 mt-1">
        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h3>Location</h3>
              <p className="text-secondary">NYC</p>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Times%20Square%2C%20New%20York%2C%20NY&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-dark text-light border-secondary h-100">
            <div className="card-body">
              <h3>Message us</h3>
              <form>
                <div className="mb-3">
                  <input className="form-control bg-black text-light border-secondary" type="text" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input className="form-control bg-black text-light border-secondary" type="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control bg-black text-light border-secondary" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="button" className="btn btn-warning">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact