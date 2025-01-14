import React, { useState } from "react"
import "./TermForm.css"
import { v4 as uuidv4 } from "uuid"
import { AlertCircle } from "lucide-react"

export default function TermForm({ onAddTerm }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [titleError, setTitleError] = useState("") // Используем строку для сообщения об ошибке
  const [descriptionError, setDescriptionError] = useState("")

  const isSubmitDisabled = () => {
    return (
      !title.trim() || !description.trim() || titleError || descriptionError
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Submit")
    let hasErrors = false
    // Проверяем заполнение полей и устанавливаем ошибки, если нужно
    if (!title.trim()) {
      setTitleError("Поле не может быть пустым")
      hasErrors = true
    }

    if (!description.trim()) {
      setDescriptionError("Поле не может быть пустым")
      hasErrors = true
    }
    if (hasErrors) {
      return
    }

    const newTerm = { title, description, id: uuidv4() }
    onAddTerm(newTerm)
    setTitle("")
    setDescription("")
  }

  const handleTitle = (e) => {
    const newTitleValue = e.target.value
    setTitle(newTitleValue)
    if (!newTitleValue.trim()) {
      setTitleError("Поле не может быть пустым")
    } else if (newTitleValue.length < 3) {
      setTitleError("Заголовок должен содержать минимум 3 символа")
    } else {
      setTitleError("")
    }
  }

  const handleDescription = (e) => {
    const newDescriptionValue = e.target.value
    setDescription(newDescriptionValue)
    if (!newDescriptionValue.trim()) {
      setDescriptionError("Поле не может быть пустым")
    } else {
      setDescriptionError("")
    }
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
          onChange={handleTitle}
        />
        {titleError && (
          <div className="form-field__error">
            <AlertCircle
              size={16}
              color="red"
              strokeWidth={2}
              className="my-icon-class"
            />
            <span>{titleError}</span>
          </div>
        )}
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
        {descriptionError && (
          <div className="form-field__error">
            <AlertCircle
              size={16}
              color="red"
              strokeWidth={2}
              className="my-icon-class"
            />
            <span>{descriptionError}</span>
          </div>
        )}
      </label>

      <button
        className="form-button"
        type="submit"
        disabled={isSubmitDisabled()}
      >
        Запомнить
      </button>
    </form>
  )
}
