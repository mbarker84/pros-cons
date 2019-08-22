import React from 'react'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__links" role="contentinfo">
        <span>Made by <a href="https://michellebarker.co.uk">Michelle Barker</a>.</span>
        <a href="https://github.com/mbarker84/pros-cons">Github</a>
      </div>
      <div className="header__content">
        <div className="header__inner">
          <h1 className="header__title">Pros <span>&</span> Cons</h1>
        </div>
      </div>
    </header>
  )
}

export default Header