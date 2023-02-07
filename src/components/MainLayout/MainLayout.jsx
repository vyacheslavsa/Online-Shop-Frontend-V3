import React from 'react'
import Header from '../Header/Header.jsx'
import Modal from '../Modal/Modal.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import './MainLayout.css'
import Loading from "../Loading/Loading.jsx";

const MainLayout = ({content}) => {
  return (
    <>
      <Header text="СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА"/>
      <div className="container">
          <div className="left_content">
            <SideBar/>
          </div>
          {content}
      </div>
      <Modal/>
    </>
  )
}

export default MainLayout
