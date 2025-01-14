import "./TermList.css"
import TermCard from "./TermCard"

export default function TermList({ terms, onDeleteTerm }) {
  // console.log(terms)
  return (
    <ul className="term-list">
      {terms.map((term) => (
        <TermCard
          key={term.id}
          id={term.id}
          title={term.title}
          description={term.description}
          onDeleteTerm={onDeleteTerm}
        />
      ))}
    </ul>
  )
}
