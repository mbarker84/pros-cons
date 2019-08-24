import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import ListTitle from './components/ListTitle'
import FormAndList from './components/FormAndList'

const renderFormAndList = (section, setSection) => {
  if (section > 0) {
    return <FormAndList section={section} onSubmit={() => setSection(2)}></FormAndList>
  }
}

const App = () => {
  const [section, setSection] = useState(0)

  return (
    <div className="app">
      <Header />
      <main>
        <ListTitle section={section} onSubmit={() => setSection(section + 1)} />
        {renderFormAndList(section, setSection)}
        <p>{section}</p>
      </main>
    </div>
  )
}

export default App
