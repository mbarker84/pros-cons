import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
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
  const value = listItems.reduce((acc, curr) => parseInt(acc) + parseInt(curr.itemValue), 0)
  return value
}

const submitButtonGetResult = (e, props) => {
  e.preventDefault()
  props.onSubmit()
}

const clear = (resetForm, setPros, setCons) => {
  setPros(initialState.pros)
  setCons(initialState.cons)
  resetForm()
}

const renderButton = (props) => {
  if (props.section === 0) return

  if (props.section === 1) {
    return (
      <div className="wrapper form__result-button-wrapper">
        <button className="button--main" type="submit" onClick={(e) => submitButtonGetResult(e, props)}>Get the result</button>
      </div>
    )
  }
}

const renderResetButton = (props, setPros, setCons) => {
  if (props.section === 2) {
    return (
      <div className="wrapper form__result-button-wrapper">
        <button className="button--main" type="reset" onClick={() => clear(props.resetForm, setPros, setCons)}>Start again</button>
      </div>
    )
  }
}

const renderResult = (section, totalPros, totalCons, isLoading) => {
  if (section !== 2) return
  if (isLoading) return

  let content
  const winner = totalPros > totalCons ? 'pros' : 'cons'

  if (totalPros === totalCons) {
    content = 'The lists are equal. Follow your heart.'
  } else {
    content = `The winner is <span>${winner}</span>.`
  }

  return (
    <div className="wrapper result">
      <CSSTransition
        in={!isLoading}
        timeout={400}
        classNames="result__loader"
        unmountOnExit
      >
        <div className="result__content">
          <div>
            <h3 className="result__heading">Result:</h3>
            <p className="result__text">{content}</p>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

const renderCreate = (setPros, setCons, pros, cons, section) => {
  if (section === 1) {
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

const renderLoader = (isLoading) => {
  return (
    <CSSTransition
      in={isLoading}
      timeout={600}
      classNames="result__loader"
      unmountOnExit
    >
      <div className="result__content">
        <p className="result__heading">Calculating result...</p>
      </div>
    </CSSTransition>
  )
}

const initialState = {
  pros: [],
  cons: [],
  isLoading: false,
}

const FormAndList = (props) => {
  const [pros, setPros] = useState(initialState.pros)
  const [cons, setCons] = useState(initialState.cons)
  const [isLoading, setIsLoading] = useState(initialState.isLoading)

  const { section, onSubmit } = props

  const totalPros = calculateTotal(pros, section)
  const totalCons = calculateTotal(cons, section)

  useEffect(
    () => {
      if (section === 2) {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 3000)
      }
    },
    [section],
  )

  return (
    <div>
      <div className="top-section">
        <ListTitle section={section} onSubmit={onSubmit} />
        {renderCreate(setPros, setCons, pros, cons, section)}
        {renderResult(section, totalPros, totalCons, isLoading)}
        {renderLoader(isLoading, setIsLoading)}

      </div>
      {renderList(section, pros, cons, totalPros, totalCons, setPros, setCons)}
      {renderButton(props)}
      {renderResetButton(props, setPros, setCons)}
    </div>
  )
}

export default FormAndList