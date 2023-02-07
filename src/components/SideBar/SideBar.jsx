import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
      <aside className="side_bar">
        <nav className="side_bar__link active_tab" id="pizza">Пицца</nav>
        <nav className="side_bar__link" id="shaurma">Шаурма</nav>
        <nav className="side_bar__link" id="sandwiches">Сендвичи</nav>
        <nav className="side_bar__link" id="burgers">Бургеры</nav>
        <nav className="side_bar__link" id="chicken">Курица & Картофель</nav>
        <nav className="side_bar__link" id="salads">Тортилья & Салаты</nav>
        <nav className="side_bar__link" id="drinks">Напитки & Десерты</nav>
      </aside>
  )
}

export default SideBar
