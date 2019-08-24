import React, { useState } from 'react'

const renderTitle = (title, titleSubmitted) => {
  if (title && titleSubmitted) {
    return <h2 className="list-title__heading">{title}</h2>
  }
}

const renderForm = (setTitle, setTitleSubmitted, props) => {
  if (props.section === 0) {
    return (
      <form className="list-title__form">
        <label className="list-title__label" htmlFor="formTitle">List title</label>
        <input className="list-title__input" type="text" id="formTitle" onChange={(event) => setTitle(event.target.value)} />
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          props.onSubmit()
          setTitleSubmitted(true)
        }}>Add title</button>
      </form>
    )
  }
}

const getText = (section) => {
  if (section === 1) {
    return  'Add items to your pros and cons list'
  }

  return 'First, let’s add a title for your list'
}

const ListTitle = (props) => {
  const [title, setTitle] = useState('Welcome to Pros and Cons!')
  const [titleSubmitted, setTitleSubmitted] = useState(false)

  return (
    <div className="list-title">
      {renderTitle(title, titleSubmitted)}
      <p class="list-title__text">{getText(props.section)}</p>
      {renderForm(setTitle, setTitleSubmitted, props)}
    </div>
  )
}

export default ListTitle