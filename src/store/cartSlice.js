import {createSlice} from '@reduxjs/toolkit';
import { toast } from "react-toastify";

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
            toast.info(`${action.payload.title} Quantity increased`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });

           }else{
                const temp = {...action.payload, itemQuantity :1}
               state.myBag.push(temp);
               toast.success(`${action.payload.title} added`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
           }
        },
        removeFromCart(state,action){
            const updatedBasket = state.myBag.filter(
                (item) => item.id !== action.payload.id
              );
              state.myBag = updatedBasket;
              toast.error(`${action.payload.title} removed`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
        },
        decrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex((item) => item.id === action.payload.id);
            if(state.myBag[itemIndex].itemQuantity > 1){
                state.myBag[itemIndex].itemQuantity -= 1;
                toast.error(`${action.payload.title} Quantity decreased`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                    });
            };
        },
        incrementQuantity(state,action){
            const itemIndex = state.myBag.findIndex((item) => item.id === action.payload.id);
            state.myBag[itemIndex].itemQuantity += 1;
            toast.info(`${action.payload.title} Quantity increased`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
        }
    }
});

export const {addToCart,removeFromCart,decrementQuantity,incrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;