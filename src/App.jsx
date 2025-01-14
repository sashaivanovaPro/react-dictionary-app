import React, { useState } from "react"
import "./App.css"
import TermList from "./TermList"
import TermForm from "./TermForm"

export default function App() {
  const [terms, setTerms] = useState([])

  const addTerm = (newTerm) => {
    setTerms([...terms, newTerm])
  }

  return (
    <div className="dictionary-app">
      <h1 className="dictionary-app__header">Словарь</h1>
      <TermForm onAddTerm={addTerm} />
      {terms.length ? (
        <TermList terms={terms} />
      ) : (
        <p>Начните добавлять термины</p>
      )}
    </div>
  )
}
