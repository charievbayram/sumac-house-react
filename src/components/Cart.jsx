import { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5050'

function Cart({ cart, increaseQty, decreaseQty, removeItem, clearCart }) {
  const [message, setMessage] = useState('')

  const names = Object.keys(cart)
  const total = names.reduce((sum, name) => {
    return sum + cart[name].price * cart[name].qty
  }, 0)

  const handleCheckout = async () => {
    if (names.length === 0) {
      setMessage('Your cart is empty.')
      return
    }

    const orderData = {
      customerName: 'Bayram Test',
      customerEmail: 'bayram@test.com',
      items: names.map((name) => ({
        name: name,
        price: cart[name].price,
        qty: cart[name].qty
      })),
      total: total,
      status: 'placed'
    }

    try {
      await axios.post(`${API_BASE}/api/orders`, orderData)
      clearCart()
      setMessage('Order placed successfully.')
    } catch (error) {
      console.error('Checkout error:', error)
      setMessage('Something went wrong while placing the order.')
    }
  }

  return (
    <div className="card bg-black text-light border-secondary sticky-cart">
      <div className="card-body">
        <h4 className="mb-3">Your Cart</h4>

        {names.length === 0 ? (
          <p className="text-secondary mb-0">Cart is empty.</p>
        ) : (
          <>
            {names.map((name) => (
              <div key={name} className="border-bottom border-secondary-subtle py-3">
                <div className="fw-bold">{name}</div>
                <div className="text-secondary small mb-2">
                  ${cart[name].price.toFixed(2)} each
                </div>

                <div className="d-flex flex-wrap align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-outline-light"
                    onClick={() => decreaseQty(name)}
                  >
                    −
                  </button>

                  <span>{cart[name].qty}</span>

                  <button
                    className="btn btn-sm btn-outline-light"
                    onClick={() => increaseQty(name)}
                  >
                    +
                  </button>

                  <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => removeItem(name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-3">
              <h5>Total: ${total.toFixed(2)}</h5>

              <div className="d-flex gap-2 mt-2 flex-wrap">
                <button className="btn btn-warning" onClick={handleCheckout}>
                  Place Order
                </button>

                <button className="btn btn-secondary" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}

        {message && <p className="mt-3 mb-0 text-warning">{message}</p>}
      </div>
    </div>
  )
}

export default Cart
