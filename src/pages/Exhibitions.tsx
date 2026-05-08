const exhibitions = [
  { id: 1, title: 'Fresh Art Fair', type: 'Group', location: 'Cheltenham', date: 'May 2026' },
  { id: 2, title: 'Fresh Art Fair', type: 'Group', location: 'Alexander Palace', date: 'January 2026' },
  { id: 3, title: 'Palazzo Fontana', type: 'Group', location: 'Anghiari', date: 'October 2025' },
  { id: 4, title: 'Studio Aperto', type: 'Solo', location: 'Anghiari', date: 'June 2025' },
  { id: 5, title: 'Gallery Lunaria', type: 'Group', location: 'Anghiari', date: 'April 2024' },
  { id: 6, title: 'Studio Aperto', type: 'Solo', location: 'Anghiari', date: 'December 2024' },
]

export default function Exhibitions() {
  return (
    <div className="exhibitions-page">
      <ul className="exhibitions-list">
        {exhibitions.map((ex) => (
          <li key={ex.id} className="exhibition-item">
            <div className="ex-left">
              <span className="ex-title">{ex.title}</span>
              <span className="ex-type">{ex.type}</span>
            </div>
            <span className="subtitle ex-venue">{ex.location}</span>
            <span className="ex-date">{ex.date}</span>
          </li>
        ))}
      </ul>
      <footer className="about-footer">
        <span className="about-copyright">© 2026 Tom Duguid. All rights reserved</span>
      </footer>
    </div>
  )
}
