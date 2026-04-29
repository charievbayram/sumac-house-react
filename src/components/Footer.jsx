function Footer() {
  return (
    <footer className="bg-black text-light py-4 mt-5 border-top border-secondary-subtle">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <h5>Hours</h5>
            <p className="text-secondary mb-0">
              Mon–Thu: 12pm–10pm<br />
              Fri–Sat: 12pm–11pm<br />
              Sun: 12pm–9pm
            </p>
          </div>
          <div className="col-md-6">
            <h5>Social</h5>
            <p className="text-secondary mb-0">
              Instagram · Facebook · TikTok
            </p>
          </div>
        </div>
        <p className="text-center text-secondary mt-4 mb-0">
          © {new Date().getFullYear()} Sumac House
        </p>
      </div>
    </footer>
  )
}

export default Footer