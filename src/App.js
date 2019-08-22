import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import ListTitle from './components/ListTitle'
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
      <Header />
      <main>
        <ListTitle section={section} />
        {renderFormAndList(section)}
        <Navigation section={section} onClickRight={() => setSection(section + 1)} onClickLeft={() => setSection(section - 1)}></Navigation>
        <p>{section}</p>
      </main>
    </div>
  )
}

export default App
