import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Exhibitions from './pages/Exhibitions'
import heroImage from './assets/hero.jpg'
import { Navbar } from './components/Navabr'
import { artworks } from './utils/artworks'

const maxHeightCm = Math.max(...artworks.map((a) => a.heightCm))

export default function App() {
  const [trackEl, setTrackEl] = useState<HTMLElement | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [vertical, setVertical] = useState(false)
  const { hash } = useLocation()

  useEffect(() => {
    const el = trackEl
    if (!el) {
      setScrolled(false)
      return
    }

    // Sync initial state in case the element mounts mid-scroll or after navigation
    setScrolled(
      vertical
        ? el.scrollTop > window.innerHeight * 0.5
        : el.scrollLeft > window.innerWidth * 0.5
    )

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseLeave = () => { isDown = false }
    const onMouseUp = () => { isDown = false }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      el.scrollLeft = scrollLeft - (x - startX)
    }

    const onScroll = () => {
      setScrolled(
        vertical
          ? el.scrollTop > window.innerHeight * 0.5
          : el.scrollLeft > window.innerWidth * 0.5
      )
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('scroll', onScroll)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('scroll', onScroll)
    }
  }, [trackEl, vertical])

  useEffect(() => {
    if (hash === '#paintings' && trackEl) {
      const galleryRow = trackEl.querySelector<HTMLElement>('.gallery-row')
      if (galleryRow) {
        trackEl.scrollTo({ left: galleryRow.offsetLeft, behavior: 'smooth' })
      }
    }
  }, [hash, trackEl])

  const toggleDirection = () => {
    setVertical((v) => !v)
    if (trackEl) {
      trackEl.scrollTo({ left: vertical ? 0 : window.innerWidth, top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="page">
      <Navbar scrolled={scrolled} />

      <Routes>
        <Route path="/" element={
          <>
            <main className={`gallery-track${vertical ? ' vertical' : ''}`} ref={setTrackEl}>
              {/* Full-viewport landing panel */}
              <div className="hero-panel">
                <img className="hero-painting" src={heroImage} alt="" />
                <div className="hero-overlay">
                  <div className="scroll-hint">
                    <span className="scroll-text">scroll for more</span>
                    <div className="scroll-arrow">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M0 10h16M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery items */}
              <div className={`gallery-row${vertical ? ' vertical' : ''}`}>
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="artwork-card">
                    <img
                      className={`artwork-image${(artwork as typeof artwork & { irregular?: boolean }).irregular ? ' artwork-image--irregular' : ''}`}
                      src={artwork.src}
                      alt={artwork.title}
                      style={{ '--scale': (artwork.heightCm / maxHeightCm).toFixed(3) } as React.CSSProperties}
                    />
                    <div className="artwork-info">
                      <div className="artwork-title-row">
                        <span className="artwork-title">{artwork.title}</span>
                        {artwork.sold && <span className="sold-dot" aria-label="Sold" />}
                      </div>
                      <p className="subtitle">{artwork.location}, {artwork.year}</p>
                      <p className="subtitle">{artwork.medium}<span className="artwork-dash"> — </span>{artwork.sizeIn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            {/* Direction toggle — once past the landing panel */}
            {scrolled && (
              <button className="direction-toggle" onClick={toggleDirection}>
                <span className="scroll-text">
                  {vertical ? 'horizontal view' : 'vertical view'}
                </span>
              </button>
            )}

            {scrolled && (
              <span className="home-copyright">© 2026 Tom Duguid. All rights reserved</span>
            )}
          </>
        } />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

