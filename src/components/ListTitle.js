import React, { useState } from 'react'

const getTitle = (titleSubmitted, title) => titleSubmitted ? title : 'First, let’s add a title for your list'

const renderForm = (titleSubmitted, setTitle, setTitleSubmitted) => {
  if (!titleSubmitted) {
    return (
      <form className="list-title__form">
        <label className="list-title__label" htmlFor="formTitle">List title</label>
        <input className="list-title__input" type="text" id="formTitle" onChange={(event) => setTitle(event.target.value)} />
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          setTitleSubmitted(true)
        }}>Add title</button>
      </form>
    )
  }
}

const renderSuccess = (titleSubmitted, section) => {
  if (titleSubmitted && section === 0) {
    return (
      <div>
        <p>Title successfully added <span role="img" aria-label="check">✔️</span></p>
        <p>Now let’s create our pros and cons list!</p>
      </div>
    )
  }
}

const ListTitle = (props) => {
  const [title, setTitle] = useState('Welcome to Pros and Cons!')
  const [titleSubmitted, setTitleSubmitted] = useState(false)

  return (
    <div className="list-title">
      <h2>{getTitle(titleSubmitted, title)}</h2>
      {renderForm(titleSubmitted, setTitle, setTitleSubmitted)}
      {renderSuccess(titleSubmitted, props.section)}
    </div>
  )
}

export default ListTitle