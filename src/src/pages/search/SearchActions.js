import SearchReducerType from '../../types/SearchReducerType'

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