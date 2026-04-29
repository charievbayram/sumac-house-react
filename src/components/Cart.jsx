function Cart({ cart, increaseQty, decreaseQty, removeItem, clearCart }) {
  const names = Object.keys(cart)
  const total = names.reduce((sum, name) => sum + cart[name].price * cart[name].qty, 0)

  return (
    <div className="card bg-black text-light border-secondary sticky-cart">
      <div className="card-body">
        <h4 className="mb-3">Your Cart</h4>

        {names.length === 0 ? (
          <p className="text-secondary mb-0">Cart is empty.</p>
        ) : (
          <>
            {names.map(name => (
              <div key={name} className="border-bottom border-secondary-subtle py-3">
                <div className="fw-bold">{name}</div>
                <div className="text-secondary small mb-2">
                  ${cart[name].price.toFixed(2)} each
                </div>

                <div className="d-flex flex-wrap align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-light" onClick={() => decreaseQty(name)}>−</button>
                  <span>{cart[name].qty}</span>
                  <button className="btn btn-sm btn-outline-light" onClick={() => increaseQty(name)}>+</button>
                  <button className="btn btn-sm btn-outline-warning" onClick={() => removeItem(name)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-3">
              <h5>Total: ${total.toFixed(2)}</h5>
              <button className="btn btn-secondary mt-2" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart