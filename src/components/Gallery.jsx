import { useState } from 'react'

function Gallery({ images, title = 'Gallery' }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCount = 3
  const maxIndex = Math.max(images.length - visibleCount, 0)

  function goNext() {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount)

  let finalImages = visibleImages
  if (visibleImages.length < visibleCount) {
    finalImages = [...visibleImages, ...images.slice(0, visibleCount - visibleImages.length)]
  }

  return (
    <section className="gallery-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">{title}</h2>

        <div className="gallery-controls">
          <button className="gallery-arrow" onClick={goPrev} type="button">‹</button>
          <button className="gallery-arrow" onClick={goNext} type="button">›</button>
        </div>
      </div>

      <div className="gallery-slider">
        {finalImages.map((img, index) => (
          <div className="gallery-slide" key={`${img.alt}-${index}`}>
            <img src={img.src} alt={img.alt} className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery