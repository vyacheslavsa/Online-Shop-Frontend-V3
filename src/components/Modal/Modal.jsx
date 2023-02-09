import React, {useEffect} from 'react'
import './Modal.css'
import cs from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal, setTabModal} from "../../features/rootSlice";
import {ALL_CATEGORIES, MODAL_TAB_TEXT, TABS_MODAL} from "../../constans";
import {getBreads, getFillings, getSauces, getSizes, getVegetables} from "../../api";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import CountBoard from "../CountBoard/CountBoard";
import Button from "../Button/Button";

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

    const onCloseModal = () => {
        dispatch(setOpenModal(false))
    }

    return (
        <div className={cs("modal_bg", {["open_modal"]: data.openModal})}>
            <div className="modal_window">
                <div className="modal_window__header">
                    <p className="modal_window__head_text">{MODAL_TAB_TEXT[data.activeTabModal]}</p>
                    <button className="modal_window__close_button" onClick={() => onCloseModal()}>+</button>
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
                    <div className={cs("modal_window__ingredients", {["loading_state"]: loading}, {["done_tab"]: data.activeTabModal === ALL_CATEGORIES.done})}>

                        {
                            loading ?
                                <Loading/>
                                :
                                data.activeTabModal !== ALL_CATEGORIES.done ?
                                    data[data.activeTabModal].map((item, idx) => <ProductCard variant={"modalCard"}
                                                                                              info={item} key={idx}/>)
                                    :
                                    <>
                                        <div className="modal_window__leftContent">
                                            <div className="product_card__image modal_image">
                                                <img src=""/>
                                            </div>
                                        </div>
                                        <div className="modal_window__rightContent">
                                            <p className="modal_window__descriptionDone">Ваш сендвич готов!</p>
                                            <p>Размер: </p>
                                            <p>Хлеб:</p>
                                            <p>Овощи: </p>
                                            <p>Соусы: </p>
                                            <p className="modal_window__descriptionLast">Начинка: </p>
                                            <p className="modal_window__nameSandwich"></p>
                                        </div>
                                    </>

                        }
                    </div>
                </div>
                <div className="modal_window__footer">
                    {data.activeTabModal === ALL_CATEGORIES.done &&
                        <CountBoard count={1} decClick={()=>console.log('dec')} incClick={()=>console.log('inc')}/>
                    }
                    <div className="modal_window__bottomFooter">
                        <p className="product_card__price modal_price">Цена: 0 руб.</p>
                        {data.activeTabModal === ALL_CATEGORIES.done &&
                            <Button>В корзину</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
