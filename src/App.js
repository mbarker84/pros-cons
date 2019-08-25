import React, { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import FormAndList from './components/FormAndList'

const App = () => {
  const [section, setSection] = useState(0)

  return (
    <div className="app">
      <Header />
      <main>
        <FormAndList section={section} onSubmit={() => setSection(section + 1)} resetForm={() => setSection(0)}></FormAndList>
      </main>
    </div>
  )
}

export default App
