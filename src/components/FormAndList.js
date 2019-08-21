import React, { useState } from 'react'
import CreateNewItem from './CreateNewItem'
import List from './List'
import ListTotal from './ListTotal'

const onItemSubmit = (setPros, setCons, pros, cons, data) => {
  if (data.type === 'pro') {
    setPros([...pros, data])
  }

  if (data.type === 'con') {
    setCons([...cons, data])
  }
}

const calculateTotal = (listItems) => {
  if (!listItems.length) return 0
  if (listItems.length === 1) return listItems[0].itemValue
  return listItems.reduce((acc, curr) => parseInt(acc.itemValue) + parseInt(curr.itemValue))
}

const renderButton = (setWinner, pros, cons) => {
  const winner = pros > cons ? 'pros' : cons < pros ? 'cons' : 'equal'
  return (
    <button type="submit" onClick={(e) => {
      e.preventDefault()
      setWinner(winner)
    }}>Get the result</button>
  )
}

const renderResult = (winner) => {
  if (winner === 'equal') {
    return (
      <div>
        <h3>The lists are equal</h3>
      </div>
    )
  }

  if (winner) {
    return (
      <div>
        <h3>The winner is {winner}</h3>
      </div>
    )
  }
}

const renderCreate = (setPros, setCons, pros, cons, winner) => {
  if (!winner) {
    return (
      <CreateNewItem onSubmit={(data) => onItemSubmit(setPros, setCons, pros, cons, data)}></CreateNewItem>
    )
  }
}

const FormAndList = (props) => {
  const [pros, setPros] = useState([])
  const [cons, setCons] = useState([])
  const [winner, setWinner] = useState(null)

  const totalPros = calculateTotal(pros)
  const totalCons = calculateTotal(cons)

  return (
    <div>
      {renderCreate(setPros, setCons, pros, cons, winner)}
      <div>
        {renderResult(winner)}
        <div>
          <List title="Pros" items={pros}></List>
          <ListTotal title="Pros total" value={totalPros}></ListTotal>
        </div>
        <div>
          <List title="Cons" items={cons}></List>
          <ListTotal title="Cons total" value={totalCons}></ListTotal>
        </div>
        {renderButton(setWinner, totalPros, totalCons)}
      </div>
    </div>
  )
}

export default FormAndList