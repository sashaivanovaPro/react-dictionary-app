import "./TermList.css"
import TermCard from "./TermCard"

export default function TermList({ terms }) {
  // console.log(terms)
  return (
    <ul className="term-list">
      {terms.map((term) => (
        <TermCard
          key={term.id}
          title={term.title}
          description={term.description}
        />
      ))}
    </ul>
  )
}
