import React from 'react'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import SideBar from '../SideBar/SideBar'
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import './MainLayout.css'
import {TEXT_HEADER} from "../../constans";
import Button from '../Button/Button';
import $apiAuth from '../../http/auth'

const MainLayout = ({children}) => {


    const createOrder = async () => {
        const result = await $apiAuth.get('/createOrder')
        console.log('message', result.data.message)
    }

    return (
        <>
            <Header text={TEXT_HEADER}/>
            <div className="container">
                <div className="left_content">
                    <SideBar/>
                    <ShoppingCart/>
                    <Button onClick={createOrder}>Приват Роут</Button>
                </div>
                {children}
            </div>
            <Modal/>
        </>
    )
}

export default MainLayout
