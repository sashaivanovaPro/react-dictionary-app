import "./TermCard.css"

export default function TermCard({ title, description }) {
  return (
    <li className="term-card">
      <h2 className="term-card__title">{title}</h2>
      <p className="term-card__description">{description}</p>
    </li>
  )
}
