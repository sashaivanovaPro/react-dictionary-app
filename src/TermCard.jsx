import "./TermCard.css"
import { Trash2 } from "lucide-react"

export default function TermCard({ title, description, onDeleteTerm, id }) {
  console.log(id)
  return (
    <li className="term-card">
      <h2 className="term-card__title">{title}</h2>
      <p className="term-card__description">{description}</p>
      <Trash2
        className="delete-icon"
        cursor="pointer"
        onClick={() => onDeleteTerm(id)}
      />
    </li>
  )
}
