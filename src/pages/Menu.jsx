import { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from '../components/Cart'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5050'

function Menu({ cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart, cartCount }) {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${API_BASE}/api/menu`)
      .then((res) => {
        setMenuItems(res.data.items || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching menu:', err)
        setLoading(false)
      })
  }, [])

  const groupedMenu = menuItems.reduce((groups, item) => {
    const category = item.category || 'Other'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(item)
    return groups
  }, {})

  return (
    <div className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold">Menu</h1>
          <p className="text-secondary mb-0">Click an item to add it to your cart.</p>
        </div>

        <a href="#cart" className="btn btn-warning">
          View Cart <span className="badge text-bg-dark ms-2">{cartCount}</span>
        </a>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          {loading ? (
            <p>Loading menu...</p>
          ) : (
            Object.keys(groupedMenu).map((category) => (
              <section className="mb-5" key={category}>
                <h2 className="section-title">{category}</h2>
                <div className="row g-3">
                  {groupedMenu[category].map((item) => (
                    <div className="col-md-6 col-xl-4" key={item._id}>
                      <div
                        className="card h-100 bg-dark text-light border-secondary menu-card"
                        onClick={() => addToCart(item.name, item.price)}
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start gap-3">
                            <div>
                              <h5 className="card-title mb-2">{item.name}</h5>
                              <p className="card-text text-secondary mb-0">{item.description}</p>
                            </div>
                            <span className="fw-bold text-warning">${item.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>

        <div className="col-lg-4" id="cart">
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
