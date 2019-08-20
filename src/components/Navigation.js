import React, { useState } from 'react'

const renderLeftButton = (props) => {
  if (props.section !== 0) {
    return <button type="button" id="buttonBack" onClick={props.onClickLeft}>Go back</button>
  }
}

const Navigation = (props) => {
  return (
    <nav className="navigation">
      {renderLeftButton(props)}
      <button type="button" id="buttonBack" onClick={props.onClickRight}>Next</button>
    </nav>
  )
}

export default Navigation