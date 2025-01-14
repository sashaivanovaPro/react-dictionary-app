import React from "react"
import "./TermForm.css"

export default function TermForm() {
  return (
    <>
      <form id="add-description" className="form">
        <h2 className="form__title">Новый термин</h2>

        <label className="form-field">
          <span className="form-field__label">Термин</span>
          <input
            className="form-field__input"
            name="title"
            type="text"
            required
          />
        </label>

        <label className="form-field">
          <span className="form-field__label">Значение</span>
          <input className="form-field__input" name="description" type="text" />
        </label>

        <button className="form-button" type="submit">
          Запомнить
        </button>
      </form>
    </>
  )
}
