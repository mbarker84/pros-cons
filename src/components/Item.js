import React from 'react'

const Item = (props) => {
  return (
    <li className="list-item">
      <h4 className="list-item__title">{props.title}</h4>
      <span className="list-item__value">{props.itemValue}</span>
      <button type="button" className="list-item__button" onClick={() => props.itemOnClick(props.index)}>Remove</button>
    </li>
  )
}

export default Item