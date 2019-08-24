import React, { useState } from 'react'
import Item from './Item'

const renderItems = (items, itemOnClick, section) => {
  if (!items) return
  return items.map((item, index) => <Item {...item} section={section} key={index} itemOnClick={itemOnClick} index={index} />)
}

const List = (props) => {
  const { items, itemOnClick, section } = props

  return (
    <div>
      <h2 className="list__heading">
        <span>{props.title}</span>
        <span className="list__total">{props.value}</span>
      </h2>
      <ul className="list__list">
        {renderItems(items, itemOnClick, section)}
      </ul>
    </div>
  )
}

export default List