import React from 'react'
import './SideBar.css'
import {TAB_CATEGORIES} from "../../constans";
import {useDispatch, useSelector} from "react-redux";
import {setTabProducts} from "../../features/rootSlice";
import cs from 'classnames'


const SideBar = () => {
    const dispatch = useDispatch()
    const activeTabProducts = useSelector(state => state.data.activeTabProducts);
    return (
        <aside className="side_bar">
            {TAB_CATEGORIES.map((tab, idx) =>
                <nav
                    className={cs("side_bar__link", {["active_tab"]: activeTabProducts === tab.category})}
                    id={tab.category}
                    key={idx}
                    onClick={() => dispatch(setTabProducts(tab.category))}
                >
                    {tab.name}
                </nav>)}
        </aside>
    )
}

export default SideBar
