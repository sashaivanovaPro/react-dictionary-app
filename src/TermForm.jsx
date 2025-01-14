import React, { useState } from "react"
import "./TermForm.css"
import { v4 as uuidv4 } from "uuid"

export default function TermForm({ onAddTerm }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Submit")
    const newTerm = { title, description, id: uuidv4() }
    onAddTerm(newTerm)
    setTitle("")
    setDescription("")
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <form id="add-description" className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Новый термин</h2>

      <label className="form-field">
        <span className="form-field__label">Заголовок</span>
        <input
          className="form-field__input"
          name="title"
          value={title}
          type="text"
          required
          onChange={handleTitle}
        />
      </label>

      <label className="form-field">
        <span className="form-field__label">Описание</span>
        <input
          className="form-field__input"
          name="description"
          type="text"
          value={description}
          onChange={handleDescription}
        />
      </label>

      <button className="form-button" type="submit">
        Запомнить
      </button>
    </form>
  )
}
