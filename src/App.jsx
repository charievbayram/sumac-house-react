import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('sumac-house-react-cart')
    return saved ? JSON.parse(saved) : {}
  })

  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    localStorage.setItem('sumac-house-react-cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(name, price) {
    setCart(prev => {
      const updated = { ...prev }
      if (!updated[name]) {
        updated[name] = { price, qty: 1 }
      } else {
        updated[name].qty += 1
      }
      return updated
    })

    setToastMessage(`${name} added to cart`)
    setTimeout(() => setToastMessage(''), 1400)
  }

  function decreaseQty(name) {
    setCart(prev => {
      const updated = { ...prev }
      if (!updated[name]) return updated
      updated[name].qty -= 1
      if (updated[name].qty <= 0) delete updated[name]
      return updated
    })
  }

  function increaseQty(name) {
    setCart(prev => {
      const updated = { ...prev }
      if (!updated[name]) return updated
      updated[name].qty += 1
      return updated
    })
  }

  function removeItem(name) {
    setCart(prev => {
      const updated = { ...prev }
      delete updated[name]
      return updated
    })
  }

  function clearCart() {
    setCart({})
  }

  const cartCount = Object.values(cart).reduce((sum, item) => sum + item.qty, 0)

  return (
    <>
      <Navbar cartCount={cartCount} />

      {toastMessage && (
        <div className="cart-toast">
          {toastMessage}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              addToCart={addToCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
              clearCart={clearCart}
              cartCount={cartCount}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App