import SearchReducerType from '../../types/SearchReducerType';

const INITIAL_STATE = {

    filter: {
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
    },
    products: {
        searched: [],
        selected: []
    },
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        
        case SearchReducerType.NAME_CONFIGURED:
            {
                let filter = { ...state.filter, name: action.payload };
                return { ...state, filter: filter }
            }

        case SearchReducerType.PRICE_CONFIGURED:
            return { ...state, price: action.payload } 
        
        case SearchReducerType.MARKET_CONFIGURED:
            {
                let filter = { ...state.filter, marketIds: action.payload }
                return { ...state, filter: filter }
            }

        case SearchReducerType.ORDER_CONFIGURED:
            return { ...state, order: action.payload }

        case SearchReducerType.GET_SUMMARY:
            return action.payload

        case SearchReducerType.PRODUCTS_SEARCHED:
            {
                let searched = state.products.searched;

                if (action.payload && action.payload.length > 0) {
                    action.payload.map(it => searched.push(it));
                }

                let products = { ...state.products, searched: searched }
                return { ...state, products: products };
            }

        case SearchReducerType.PRODUCTS_SELECTED:
            return { ...state, selected: action.payload }

        default:
            return state;
    }
}