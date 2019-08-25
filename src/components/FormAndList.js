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
  return listItems.reduce((acc, curr) => parseInt(acc) + parseInt(curr.itemValue || 10), 0)
}

const submitButtonGetResult = (e, props, winner, setWinner) => {
  e.preventDefault()
  setWinner(winner)
  props.onSubmit()
}

const renderButton = (setWinner, pros, cons, props, resetForm) => {
  const winner = pros > cons ? 'pros' : cons < pros ? 'cons' : 'equal'

  if (props.section === 0) return

  if (props.section === 1) {
    return (
      <div className="wrapper form__result-button-wrapper">
        <button type="submit" onClick={(e) => submitButtonGetResult(e, props, winner, setWinner)}>Get the result</button>
      </div>
    )
  }

  if (props.section === 2) {
    return (
      <div className="wrapper form__result-button-wrapper">
        <button type="reset" onClick={resetForm}>Start again</button>
      </div>
    )
  }
}

const renderResult = (winner, section) => {
  if (section !== 2) return

  if (winner === 'equal') {
    return (
      <div className="wrapper result">
        <h3 className="result__heading">Result:</h3>
        <p className="result__text">The lists are equal. Follow your heart.</p>
      </div>
    )
  }

  if (winner) {
    return (
      <div className="wrapper result">
        <h3 className="result__heading">Result:</h3>
        <p className="result__text">The winner is <span>{winner}</span>.</p>
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
            <List title="Cons" value={totalCons} items={cons} section={section} itemOnClick={(itemIndex) => setCons(removeItem(pros, itemIndex))}></List>
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

  const { section, onSubmit, resetForm } = props

  const totalPros = calculateTotal(pros, section)
  const totalCons = calculateTotal(cons, section)

  const listHasItems = totalPros > 0 || totalCons > 0

  return (
    <div>
      <ListTitle section={section} onSubmit={onSubmit} shouldShowText={listHasItems} />
      {renderCreate(setPros, setCons, pros, cons, props)}
      {renderResult(winner, section)}
      {renderList(section, pros, cons, totalPros, totalCons, setPros, setCons)}
      {renderButton(setWinner, pros, cons, props, resetForm)}
    </div>
  )
}

export default FormAndList