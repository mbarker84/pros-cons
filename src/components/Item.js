import React from 'react'

const Item = (props) => {
  return (
    <li>{props.title} - {props.itemValue}</li>
  )
}

export default Item