export const TEXT_HEADER = 'СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА'

export const ALL_CATEGORIES = {
    breads: "breads",
    fillings: "fillings",
    sauces: "sauces",
    sizes: "sizes",
    vegetables: "vegetables",
    done: "done"
};

export const CATEGORY = [
    ALL_CATEGORIES.breads,
    ALL_CATEGORIES.fillings,
    ALL_CATEGORIES.sauces,
    ALL_CATEGORIES.sizes,
    ALL_CATEGORIES.vegetables,
];

export const TAB_CATEGORIES = [
    {
        category: 'pizza',
        name: 'Пицца'
    },
    {
        category: 'shaurma',
        name: 'Шаурма'
    },
    {
        category: 'sandwiches',
        name: 'Сендвичи'
    },
    {
        category: 'burgers',
        name: 'Бургеры'
    },
    {
        category: 'chicken',
        name: 'Курица & Картофель'
    },
    {
        category: 'salads',
        name: 'Тортилья & Салаты'
    },
    {
        category: 'drinks',
        name: 'Напитки & Десерты'
    },
];

export const TABS_MODAL = [
    {
        category: ALL_CATEGORIES.sizes,
        name: 'Размер'
    },
    {
        category: ALL_CATEGORIES.breads,
        name: 'Хлеб'
    },
    {
        category: ALL_CATEGORIES.vegetables,
        name: 'Овощи'
    },
    {
        category: ALL_CATEGORIES.sauces,
        name: 'Соусы'
    },
    {
        category: ALL_CATEGORIES.fillings,
        name: 'Начинка'
    },
    {
        category: ALL_CATEGORIES.done,
        name: 'Готово!'
    },
];

export const MODAL_TAB_TEXT = {
    [ALL_CATEGORIES.sizes]: "Выберите размер сендвича",
    [ALL_CATEGORIES.breads]: "Хлеб для сендвича на выбор",
    [ALL_CATEGORIES.vegetables]: "Дополнительные овощи бесплатно",
    [ALL_CATEGORIES.sauces]: "Выберите три бесплатных соуса по вкусу",
    [ALL_CATEGORIES.fillings]: "Добавьте начинку по вкусу",
    [ALL_CATEGORIES.done]: "Проверьте и добавьте в корзину",
}