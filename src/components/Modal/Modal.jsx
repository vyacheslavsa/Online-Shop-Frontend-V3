import React, {useEffect} from 'react'
import './Modal.css'
import cs from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {setCustomSandwich, setOpenModal, setShoppingCart, setTabModal} from "../../features/rootSlice";
import {ALL_CATEGORIES, CATEGORY, MODAL_TAB_TEXT, TABS_MODAL} from "../../constans";
import {getBreads, getFillings, getSauces, getSizes, getVegetables} from "../../api";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import CountBoard from "../CountBoard/CountBoard";
import Button from "../Button/Button";

const Modal = () => {
    const dispatch = useDispatch();
    const {customSandwich, activeTabModal, openModal, shoppingCart} = useSelector(state => state.data)
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

    const calculatePrice = (obj) => {
        const concatData = [];
        CATEGORY.forEach((item) => concatData.push(...data[item]));
        const res = obj.allIdIngredients.map((value) => concatData.find((item) => value === item._id).price);
        res.push(customSandwich.defaultPrice)
        return res.reduce((acc, cur) => acc + cur);
    }

    const onCloseModal = () => {
        dispatch(setOpenModal(false))
        dispatch(setTabModal(ALL_CATEGORIES.sizes))
        dispatch(setCustomSandwich({}))
    }

    const addFilling = (filling) => {
        const isMultipleCategories = activeTabModal === ALL_CATEGORIES.vegetables || activeTabModal === ALL_CATEGORIES.sauces || activeTabModal === ALL_CATEGORIES.fillings;

        const copyObj = {...customSandwich};
        const selectedElement = data[activeTabModal].find((item) => item._id === filling._id);

        if (!customSandwich.allIdIngredients.includes(filling._id)
        ) {
            if (customSandwich.hasOwnProperty(activeTabModal) && !isMultipleCategories) {
                const idCurrenCategory = data[activeTabModal].map((item) => item._id);
                const index = copyObj.allIdIngredients.findIndex((item) => idCurrenCategory.includes(item));
                const copyArr = [...copyObj.allIdIngredients]
                copyArr[index] = filling._id;
                copyObj.allIdIngredients = copyArr
            } else {
                copyObj.allIdIngredients = [...customSandwich.allIdIngredients, filling._id,];
            }

            if (isMultipleCategories) {
                if (!customSandwich[activeTabModal]) {
                    copyObj[activeTabModal] = [selectedElement.name];
                } else {
                    copyObj[activeTabModal] = [
                        ...customSandwich[activeTabModal],
                        selectedElement.name,
                    ];
                }
            } else {
                copyObj[activeTabModal] = selectedElement.name;
            }
        } else {
            const copyArr = [...customSandwich.allIdIngredients];
            const indexElement = copyArr.findIndex(
                (item) => item === filling._id
            );
            copyArr.splice(indexElement, 1);
            copyObj.allIdIngredients = copyArr;

            if (
                !isMultipleCategories ||
                copyObj[activeTabModal].length === 1
            ) {
                delete copyObj[activeTabModal];
            } else {
                const indexElement = copyObj[activeTabModal].findIndex((item) => item === selectedElement.name);
                const copyArrId = [...copyObj[activeTabModal]]
                copyArrId.splice(indexElement, 1);
                copyObj[activeTabModal] = copyArrId
            }
        }

        if (copyObj.allIdIngredients.length) {
            copyObj.price = calculatePrice(copyObj);
        } else {
            copyObj.price = customSandwich.defaultPrice;
        }

        dispatch(setCustomSandwich(copyObj))
    }

    const addFillingInShoppingCart = () => {
            dispatch(setShoppingCart([...shoppingCart, {...customSandwich}]))
            onCloseModal()
    }


    const updateData = (arr) => arr.map((item,idx) => idx+1 !== arr.length ?  `${item}, `: `${item}.`)

    const changeCount = (event) => {
        const copyCustomSandwich = {...customSandwich}
        event==='inc' ? copyCustomSandwich.count++ : copyCustomSandwich.count>1 && copyCustomSandwich.count--
        dispatch(setCustomSandwich(copyCustomSandwich))
    }

    return (
        <div className={cs("modal_bg", {["open_modal"]: openModal})}>
            <div className="modal_window">
                <div className="modal_window__header">
                    <p className="modal_window__head_text">{MODAL_TAB_TEXT[activeTabModal]}</p>
                    <button className="modal_window__close_button" onClick={() => onCloseModal()}>+</button>
                </div>
                <div className="modal_window__content">
                    <div className="modal_window__tabs_panel">
                        {
                            TABS_MODAL.map((tab, idx) =>
                                <div
                                    className={cs("modal_window__tab", {["active_ingredients"]: activeTabModal === tab.category})}
                                    key={idx}
                                    id={tab.category}
                                    onClick={() => dispatch(setTabModal(tab.category))}
                                >
                                    {tab.name}
                                </div>)
                        }
                    </div>
                    <div className={cs("modal_window__ingredients", {["loading_state"]: loading}, {["done_tab"]: activeTabModal === ALL_CATEGORIES.done})}>

                        {
                            loading ?
                                <Loading/>
                                :
                                data.activeTabModal !== ALL_CATEGORIES.done ?
                                    data[data.activeTabModal].map((item, idx) => <ProductCard variant={"modalCard"} info={item} key={idx} onClick={addFilling}/>)
                                    :
                                    <>
                                        <div className="modal_window__leftContent">
                                            <div className="product_card__image modal_image">
                                                <img src={customSandwich.image} alt="no image"/>
                                            </div>
                                        </div>
                                        <div className="modal_window__rightContent">
                                            <p className="modal_window__descriptionDone">Ваш сендвич готов!</p>
                                            <p>Размер: {customSandwich.sizes || '-'}</p>
                                            <p>Хлеб: {customSandwich.breads || '-'}</p>
                                            <p>Овощи: {customSandwich.hasOwnProperty('vegetables') ? updateData(customSandwich.vegetables): '-'}</p>
                                            <p>Соусы: {customSandwich.hasOwnProperty('sauces') ? updateData(customSandwich.sauces) : '-'}</p>
                                            <p className="modal_window__descriptionLast">Начинка: {customSandwich.hasOwnProperty('fillings') ? updateData(customSandwich.fillings):'-'}</p>
                                            <p className="modal_window__nameSandwich">{customSandwich.name}</p>
                                        </div>
                                    </>
                        }
                    </div>
                </div>
                <div className="modal_window__footer">
                    {activeTabModal === ALL_CATEGORIES.done &&
                        <CountBoard count={customSandwich.count} decClick={()=>changeCount('dec')} incClick={()=>changeCount('inc')}/>
                    }
                    <div className="modal_window__bottomFooter">
                        <p className="product_card__price modal_price">Цена: {customSandwich.price} руб.</p>
                        {activeTabModal === ALL_CATEGORIES.done &&
                            <Button onClick={addFillingInShoppingCart}>В корзину</Button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
