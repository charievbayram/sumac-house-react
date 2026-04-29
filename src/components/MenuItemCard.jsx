function MenuItemCard({ item, addToCart }) {
  return (
    <div className="col-md-6 col-xl-4">
      <div
        className="card h-100 bg-dark text-light border-secondary menu-card"
        onClick={() => addToCart(item.name, item.price)}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start gap-3">
            <div>
              <h5 className="card-title mb-2">{item.name}</h5>
              <p className="card-text text-secondary mb-0">{item.desc}</p>
            </div>
            <span className="fw-bold text-warning">${item.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard