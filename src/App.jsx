import React, { useState } from "react"
import "./App.css"
import TermList from "./TermList"
import TermForm from "./TermForm"

export default function App() {
  const [terms, setTerms] = useState([])

  const addTerm = (newTerm) => {
    const newTerms = [...terms, newTerm]
    setTerms(sortTermsArray(newTerms))
  }

  const deleteTerm = (id) => {
    const filteredArray = terms.filter((term) => term.id !== id)
    setTerms(filteredArray)
  }

  const sortTermsArray = (arrayToSort) => {
    return [...arrayToSort].sort((a, b) => a.title.localeCompare(b.title))
  }

  return (
    <div className="dictionary-app">
      <h1 className="dictionary-app__header">Словарь</h1>
      <TermForm onAddTerm={addTerm} />
      {terms.length ? (
        <TermList terms={terms} onDeleteTerm={deleteTerm} />
      ) : (
        <p>Начните добавлять термины</p>
      )}
    </div>
  )
}
