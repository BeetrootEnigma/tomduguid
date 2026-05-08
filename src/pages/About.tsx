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
          A British visual artist who works in Tuscany, where he has lived since 1989.
          After graduating in a degree in History of Art, he moved to Italy, where he
          paints in oil on wood and canvas. He is a self taught artist who has painted
          since childhood. Many of his paintings focus on the landscape and houses of
          the surrounding countryside, others on interiors from the past.
        </p>
        <div className="about-links">
          <a href="mailto:duguidtom@gmail.com">email</a>
          <a href="https://www.instagram.com/tomduguid" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </div>

      <footer className="about-footer">
        <span className="about-copyright">© 2026 Tom Duguid. All rights reserved</span>
      </footer>
    </div>
  )
}
