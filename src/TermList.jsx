import TermCard from "./TermCard"
import "./TermList.css"

export default function TermList() {
  return (
    <ul className="term-list">
      <li>
        <TermCard />
      </li>
    </ul>
  )
}
