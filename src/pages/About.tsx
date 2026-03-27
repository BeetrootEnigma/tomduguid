import studioImg from '../assets/toms_studio_resized.webp'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={studioImg} alt="Tom Duguid's studio" className="about-hero-img" />
      </div>

      <div className="about-body-section">
        <h1 className="about-name">Tom Duguid</h1>
        <p className="about-body-text">
          British oil painter based in Italy since 1988. Tom studied Art
          History at the University of East Anglia, quickly discovering
          that his curiosity lay in painting, rather than in examination
          and debate. He works with canvas and wooden supports from reclaimed
          doors, windows, depicting Tuscan and Mediterranean landscapes.
        </p>
        <div className="about-links">
          <a href="mailto:studio@tomduguid.com">email</a>
          <a href="https://www.instagram.com/tomduguid" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </div>

      <footer className="about-footer">
        <span className="about-copyright">© 2026 Tom Duguid. All rights reserved</span>
      </footer>
    </div>
  )
}
