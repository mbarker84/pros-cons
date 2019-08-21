import React, { useState } from 'react'
import Item from './Item'

const renderItems = (items, itemOnClick) => {
  if (!items) return
  return items.map((item, index) => <Item {...item} key={index} itemOnClick={itemOnClick} index={index} />)
}

const List = (props) => {
  const { items, itemOnClick } = props

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {renderItems(items, itemOnClick)}
      </ul>
    </div>
  )
}

export default List