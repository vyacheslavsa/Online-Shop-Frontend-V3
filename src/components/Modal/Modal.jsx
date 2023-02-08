import React, {useEffect} from 'react'
import './Modal.css'
import cs from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal, setTabModal} from "../../features/rootSlice";
import {TABS_MODAL} from "../../constans";
import {getBreads, getFillings, getSauces, getSizes, getVegetables} from "../../api";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";

const Modal = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data)

    useEffect(() => {
        if (data.openModal) {
            if (data.activeTabModal === "sizes" && !data[data.activeTabModal].length) dispatch(getSizes())
            if (data.activeTabModal === "breads" && !data[data.activeTabModal].length) dispatch(getBreads())
            if (data.activeTabModal === "vegetables" && !data[data.activeTabModal].length) dispatch(getVegetables())
            if (data.activeTabModal === "sauces" && !data[data.activeTabModal].length) dispatch(getSauces())
            if (data.activeTabModal === "fillings" && !data[data.activeTabModal].length) dispatch(getFillings())
        }
    }, [data.activeTabModal, data.openModal])

    const loading = data.loadings.fillingsLoading || data.loadings.breadsLoading || data.loadings.saucesLoading || data.loadings.sizesLoading || data.loadings.vegetablesLoading

    return (
        <div className={cs("modal_bg", {["open_modal"]: data.openModal})}>
            <div className="modal_window">
                <div className="modal_window__header">
                    <p className="modal_window__head_text"></p>
                    <button className="modal_window__close_button" onClick={() => dispatch(setOpenModal(false))}>+
                    </button>
                </div>
                <div className="modal_window__content">
                    <div className="modal_window__tabs_panel">
                        {
                            TABS_MODAL.map((tab, idx) =>
                                <div
                                    className={cs("modal_window__tab", {["active_ingredients"]: data.activeTabModal === tab.category})}
                                    key={idx}
                                    id={tab.category}
                                    onClick={() => dispatch(setTabModal(tab.category))}
                                >
                                    {tab.name}
                                </div>)
                        }
                    </div>
                    <div className={cs("modal_window__ingredients", {["loading_state"]: loading})}>

                        {
                            loading ?
                                <Loading/>
                                :
                                data.activeTabModal !== "done" ?
                                    data[data.activeTabModal].map((item, idx) => <ProductCard variant={"modalCard"} info={item} key={idx}/>)
                                    :
                                    <div>done</div>

                        }
                    </div>
                </div>
                <div className="modal_window__footer">
                    <div className="modal_window__bottomFooter">
                        <p className="product_card__price modal_price">Цена: 0 руб.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
