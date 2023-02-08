import React from 'react'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import SideBar from '../SideBar/SideBar'
import './MainLayout.css'
import {TEXT_HEADER} from "../../constans";

const MainLayout = ({children}) => {
    return (
        <>
            <Header text={TEXT_HEADER}/>
            <div className="container">
                <div className="left_content">
                    <SideBar/>
                </div>
                {children}
            </div>
            <Modal/>
        </>
    )
}

export default MainLayout
