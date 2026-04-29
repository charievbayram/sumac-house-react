import { menuData } from '../data/menuData'
import MenuItemCard from '../components/MenuItemCard'
import Cart from '../components/Cart'

function Menu({ cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart, cartCount }) {
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
          <section className="mb-5">
            <h2 className="section-title">Mezze</h2>
            <div className="row g-3">
              {menuData.mezze.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="section-title">Salads</h2>
            <div className="row g-3">
              {menuData.salads.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="section-title">Appetizers</h2>
            <div className="row g-3">
              {menuData.appetizers.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="section-title">Mains</h2>
            <div className="row g-3">
              {menuData.mains.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h2 className="section-title">Dessert</h2>
            <div className="row g-3">
              {menuData.dessert.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title">Coffee & Tea</h2>
            <div className="row g-3">
              {menuData.drinks.map(item => (
                <MenuItemCard key={item.name} item={item} addToCart={addToCart} />
              ))}
            </div>
          </section>
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