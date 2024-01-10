import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
        name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct=state.find(i=>i.id==action.payload.id)
            if(existingProduct){
                const remainingProducts=state.filter(i=>i.id!=action.payload.id)
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*action.payload.price
                state=([...remainingProducts,existingProduct])
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
    }
})

export const {addToCart} =cartSlice.actions
export default cartSlice.reducer