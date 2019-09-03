import React, { useState } from 'react'

const getTitle = (title, section) => {
  return title && section > 0 ? title : 'Welcome to Pros & Cons!'
}

const renderForm = (setTitle, setTitleSubmitted, props) => {
  if (props.section === 0) {
    return (
      <form className="list-title__form">
        <label className="list-title__label" htmlFor="formTitle">List title</label>
        <input className="list-title__input" type="text" id="formTitle" onChange={(event) => setTitle(event.target.value)} />
        <button className="button--main" type="submit" onClick={(e) => {
          e.preventDefault()
          props.onSubmit()
          setTitleSubmitted(true)
        }}>Add title</button>
      </form>
    )
  }
}

const renderText = (section) => {
  if (section >= 2) return

  let text = 'This app helps you make decisions by weighing up the pros and cons. First, let’s add a title for your list'

  if (section === 1) {
    text = 'Add items to your pros and cons lists. Rate each one out of 10 based on importance.'
  }

  return (
    <div className="list-title__text-block">
      <p className="list-title__text">{text}</p>
    </div>
  )
}

const ListTitle = (props) => {
  const [title, setTitle] = useState('Welcome to Pros and Cons!')
  const [titleSubmitted, setTitleSubmitted] = useState(false)

  const { section } = props

  return (
    <div className="list-title">
      <h2 className="list-title__heading">{getTitle(title, section)}</h2>
      {renderText(section)}
      {renderForm(setTitle, setTitleSubmitted, props)}
    </div>
  )
}

export default ListTitle