const exhibitions = [
  { id: 1, title: 'Open Studio', type: 'Solo', venue: 'Studio', location: 'Anghiari', date: 'December, 2024' },
  { id: 2, title: 'Anghiari', type: 'Group', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'November, 2024' },
  { id: 3, title: 'Art Fair', type: 'Duo', venue: 'Cambridge', location: 'Cambridge', date: 'October, 2024' },
  { id: 4, title: 'Palazzo Pretorio', type: 'Solo', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'June, 2024' },
  { id: 5, title: 'Open Studio', type: 'Duo', venue: 'Studio', location: 'Anghiari', date: 'December, 2023' },
  { id: 6, title: 'Open Studio', type: 'Group', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'October, 2023' },
  { id: 7, title: 'Open Studio', type: 'Solo', venue: 'Studio', location: 'Anghiari', date: 'December, 2022' },
  { id: 8, title: 'Art Fair', type: 'Group', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'September, 2022' },
  { id: 9, title: 'Open Studio', type: 'Solo', venue: 'Studio', location: 'Anghiari', date: 'December, 2021' },
  { id: 10, title: 'Art Fair', type: 'Group', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'October, 2021' },
  { id: 11, title: 'Open Studio', type: 'Group', venue: 'Studio', location: 'Anghiari', date: 'December, 2020' },
  { id: 12, title: 'Art Fair', type: 'Duo', venue: 'Palazzo Pretorio', location: 'Sansepolcro', date: 'September, 2020' },
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
            <span className="subtitle ex-venue">{ex.venue}, {ex.location}</span>
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
