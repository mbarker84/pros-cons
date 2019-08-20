import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import FormAndList from './components/FormAndList'

const renderFormAndList = (section) => {
  if (section === 1) {
    return <FormAndList></FormAndList>
  }
}

const App = () => {
  const [section, setSection] = useState(0)

  return (
    <div className="app">
      <Header section={section}></Header>
      {renderFormAndList(section)}
      <Navigation section={section} onClickRight={() => setSection(section + 1)} onClickLeft={() => setSection(section - 1)}></Navigation>
      <p>{section}</p>
    </div>
  )
}

export default App
