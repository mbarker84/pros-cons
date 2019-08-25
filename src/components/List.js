import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Item from './Item'

const renderItems = (items, itemOnClick, section) => {
  if (!items) return
  return items.map((item, index) => {
    return (
      <CSSTransition key={index} classNames="list-item-transition" timeout={300}>
        <Item {...item} section={section} key={index} itemOnClick={itemOnClick} index={index} />
      </CSSTransition>
    )
  })
}

const List = (props) => {
  const { items, itemOnClick, section } = props

  return (
    <div className="list">
      <h2 className="list__heading">
        <span>{props.title}</span>
        <span className="list__total">{props.value}</span>
      </h2>
      <TransitionGroup transitionName="list__transition" className="list__list" component="ul">
        {renderItems(items, itemOnClick, section)}
      </TransitionGroup>
    </div>
  )
}

export default List