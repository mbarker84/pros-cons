import React, { useState } from 'react'

const getTitle = (titleSubmitted, title) => titleSubmitted ? title : 'Add title'

const renderForm = (titleSubmitted, setTitle, setTitleSubmitted) => {
  if (!titleSubmitted) {
    return (
      <form>
        <label htmlFor="formTitle">List title</label>
        <input type="text" id="formTitle" onChange={(event) => setTitle(event.target.value)} />
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

const Header = (props) => {
  const [title, setTitle] = useState('Welcome to Pros and Cons!')
  const [titleSubmitted, setTitleSubmitted] = useState(false)

  return (
    <header className="header">
      <h1>{getTitle(titleSubmitted, title)}</h1>
      {renderForm(titleSubmitted, setTitle, setTitleSubmitted)}
      {renderSuccess(titleSubmitted, props.section)}
    </header>
  )
}

export default Header