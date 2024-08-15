import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    myBag: [],
    total: 0,
  };

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart(state,action){
           const itemIndex = state.myBag.findIndex((item) => item.id === action.payload.id);

           if(itemIndex>= 0){
            state.myBag[itemIndex].itemQuantity +=1;

           }else{
                const temp = {...action.payload, itemQuantity :1}
               state.myBag.push(temp);
           }
        },
        removeFromCart(state,action){
            const updatedBasket = state.myBag.filter(
                (item) => item.id !== action.payload.id
              );
              state.myBag = updatedBasket;
        },
        decrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex((item) => item.id === action.payload.id);
            if(state.myBag[itemIndex].itemQuantity > 1){
                state.myBag[itemIndex].itemQuantity -= 1;
            };
        },
        incrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex((item) => item.id === action.payload.id);
            state.myBag[itemIndex].itemQuantity += 1;
        }
    }
});

export const {addToCart,removeFromCart,decrementQuantity,incrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;