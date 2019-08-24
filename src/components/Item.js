import React from 'react'

const renderButton = (props) => {
  if (props.section === 1) {
    return <button type="button" className="list-item__button" onClick={() => props.itemOnClick(props.index)}>Remove</button>
  }
}

const Item = (props) => {
  return (
    <li className="list-item">
      <h4 className="list-item__title">{props.title}</h4>
      <span className="list-item__value">{props.itemValue}</span>
      {renderButton(props)}
    </li>
  )
}

export default Item