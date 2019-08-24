import React, { useState } from 'react'
import CreateNewItem from './CreateNewItem'
import List from './List'
import ListTitle from './ListTitle'

const onItemSubmit = (setPros, setCons, pros, cons, data) => {
  if (data.type === 'pro') {
    setPros([...pros, data])
  }

  if (data.type === 'con') {
    setCons([...cons, data])
  }
}

const calculateTotal = (listItems, section) => {
  if (!listItems || !listItems.length) return 0
  if (section === 0) return 0
  if (listItems.length === 1) return listItems[0].itemValue
  return listItems.reduce((acc, curr) => parseInt(acc.itemValue) + parseInt(curr.itemValue))
}

const renderButton = (setWinner, pros, cons, props) => {
  const winner = pros > cons ? 'pros' : cons < pros ? 'cons' : 'equal'

  if (props.section === 1) {
    return (
      <button type="submit" onClick={(e) => {
        e.preventDefault()
        setWinner(winner)
        props.onSubmit()
      }}>Get the result</button>
    )
  }
}

const renderResult = (winner, section) => {
  if (section !== 2) return

  if (winner === 'equal') {
    return (
      <div className="wrapper">
        <h3>The lists are equal</h3>
      </div>
    )
  }

  if (winner) {
    return (
      <div className="wrapper">
        <h3>The winner is {winner}</h3>
      </div>
    )
  }
}

const renderCreate = (setPros, setCons, pros, cons, props) => {
  if (props.section === 1) {
    return (
      <div className="wrapper">
        <CreateNewItem onSubmit={(data) => onItemSubmit(setPros, setCons, pros, cons, data)}></CreateNewItem>
      </div>
    )
  }
}

const removeItem = (array, itemIndex) => {
  return array.filter((item, index) => index !== itemIndex)
}

const renderList = (section, pros, cons, totalPros, totalCons, setPros, setCons) => {
  if (section > 0) {
    return (
      <div className="wrapper wrapper--large">
        <div className="list__wrapper">
          <div>
            <List title="Pros" value={totalPros} items={pros} section={section} itemOnClick={(itemIndex) => setPros(removeItem(pros, itemIndex))}></List>
          </div>
          <div>
            <List title="Cons" value={totalCons} items={cons} itemOnClick={(itemIndex) => setCons(removeItem(pros, itemIndex))}></List>
          </div>
        </div>
      </div>
    )
  }
}

const FormAndList = (props) => {
  const [pros, setPros] = useState([])
  const [cons, setCons] = useState([])
  const [winner, setWinner] = useState(null)

  const { section, onSubmit } = props

  const totalPros = calculateTotal(pros, section)
  const totalCons = calculateTotal(cons, section)

  const listHasItems = totalPros > 0 || totalCons > 0

  return (
    <div>
      <ListTitle section={section} onSubmit={onSubmit} shouldShowText={listHasItems} />
      {renderCreate(setPros, setCons, pros, cons, props)}
      {renderResult(winner, section)}
      {renderList(section, pros, cons, totalPros, totalCons, setPros, setCons)}
      {renderButton(setWinner, totalPros, totalCons, props)}
    </div>
  )
}

export default FormAndList