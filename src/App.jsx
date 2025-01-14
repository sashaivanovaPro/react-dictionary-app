import React from "react"
import "./App.css"
import TermList from "./TermList"
import TermForm from "./TermForm"

function App() {
  return (
    <div className="dictionary-app">
      <h1 className="dictionary-app__header">Словарь</h1>
      <TermForm />
      <TermList />
    </div>
  )
}
export default App
