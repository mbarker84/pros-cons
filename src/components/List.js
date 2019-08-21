import React, { useState } from 'react'
import Item from './Item'

const renderItems = (items) => {
  if (!items) return
  return items.map((item, index) => <Item {...item} key={index} />)
}

const List = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {renderItems(props.items)}
      </ul>
    </div>
  )
}

export default List