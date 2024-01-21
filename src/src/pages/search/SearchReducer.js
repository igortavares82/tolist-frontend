import SearchReducerType from '../../types/SearchReducerType';

const INITIAL_STATE = {
    name: null,
    price: {
        min: 1,
        max: 200
    },
    marketIds: [1,2,3],
    order: {
        field: 'price',
        direction: 1
    },
    page: {
        index: 1,
        limit: 10
    }
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        case SearchReducerType.NAME_CONFIGURED:
            return { ...state, name: action.payload }

        case SearchReducerType.PRICE_CONFIGURED:
            return { ...state, price: action.payload } 
        
        case SearchReducerType.MARKET_CONFIGURED:
            return { ...state, marketIds: action.payload }

        case SearchReducerType.ORDER_CONFIGURED:
            return { ...state, order: action.payload }

        case SearchReducerType.GET_SUMMARY:
            return action.payload

        default:
            return state;
    }
}