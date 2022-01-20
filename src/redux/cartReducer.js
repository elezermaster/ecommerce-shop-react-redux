

const initialState = {
    cartItems : [
    //    'item1', 'item2'
    ]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item=>item.id !== action.payload.id)
            }
    
        default:
            return state;
    }
}