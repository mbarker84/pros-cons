import React, { useState } from 'react'
import CreateNewItem from './CreateNewItem'
import List from './List'

const onItemSubmit = (setPros, setCons, pros, cons, data) => {
  console.log(data)

  if (data.type === 'pro') {
    setPros([...pros, data])
  }

  if (data.type === 'con') {
    setCons([...cons, data])
  }
}

const FormAndList = (props) => {
  const [pros, setPros] = useState([])
  const [cons, setCons] = useState([])

  return (
    <div>
      <CreateNewItem onSubmit={(data) => onItemSubmit(setPros, setCons, pros, cons, data)}></CreateNewItem>
      <div>
        <List title="Pros" items={pros}></List>
        <List title="Cons" items={cons}></List>
      </div>
    </div>
  )
}

export default FormAndList