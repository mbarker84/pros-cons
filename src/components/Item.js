import React from 'react'

const Item = (props) => {
  return (
    <li className="list-item">
      <span>{props.title} - {props.itemValue}</span>
      <button type="button" className="list-item__button" onClick={() => props.itemOnClick(props.index)}>Remove</button>
    </li>
  )
}

export default Item