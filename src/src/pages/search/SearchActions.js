import SearchReducerType from '../../types/SearchReducerType';

export function configureName(values) {

    return {
        type: SearchReducerType.NAME_CONFIGURED,
        payload: values
    }
}

export function configurePrice(values) {

    return {
        type: SearchReducerType.PRICE_CONFIGURED,
        payload: values
    }
}

export function configureOrder(values) {

    return {
        type: SearchReducerType.ORDER_CONFIGURED,
        payload: values
    }
}

export function configureMarkets(values) {

    return {
        type: SearchReducerType.MARKET_CONFIGURED,
        payload: values
    }
}

export function getSummary(values) {

    return {
        type: SearchReducerType.GET_SUMMARY,
        payload: values
    }
}

export function searchedProducts() {
    const getId = _ => Math.floor(Math.random() * 10000)

    return {
        type: SearchReducerType.PRODUCTS_SEARCHED,
        payload: [
            {
                id: getId(),
                name: 'What is Lorem Ipsum?',
                price: 112.03,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                lateUpdate: '01/01/2024',
                market: 'Pingo Doce'
            },
            {
                id: getId(),
                name: 'Where does it come from?',
                price: 0.53,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                lateUpdate: '01/01/2024',
                market: 'Continente'
            },
            {
                id: getId(),
                name: 'Where does it come from?',
                price: 1.50,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                lateUpdate: '01/01/2024',
                market: 'Auchan'
            },
            {
                id: getId(),
                name: 'Where does it come from?',
                price: 2.50,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                lateUpdate: '01/01/2024',
                market: 'Pingo Doce'
            },
            {
                id: getId(),
                name: 'Where does it come from?',
                price: 1.50,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                lateUpdate: '01/01/2024',
                market: 'Pingo Doce'
            }
        ]
    }
}

export function getProducts(view) {

    return {
        type: SearchReducerType.GET_PRODUCTS,
        payload: view
    }
}

export function selectedProducts(values) {

    return {
        type: SearchReducerType.PRODUCTS_SELECTED,
        payload: values
    }
}

export function unselectedProduct(values) {

    return {
        type: SearchReducerType.PRODUCTS_UNSELECTED,
        payload: values
    }
}

export function changeSearchBarState(){

    return {
        type: SearchReducerType.SEARCHBAR_STATE_CHANGED,
        payload: null
    }
}