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
        },
        removeFromCart:(state,action)=>{
            return state.filter(i=>i.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state= []
        },
        incQuantity:(state,action)=>{
            const existingProduct=state.find(i=>i.id==action.payload)
            existingProduct.quantity+=1
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts=state.filter(i=>i.id!=action.payload)
            state=[...remainingProducts,existingProduct]
        },
        decQuantity:(state,action)=>{
            const existingProduct=state.find(i=>i.id==action.payload)
            existingProduct.quantity-=1
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts=state.filter(i=>i.id!=action.payload)
            state=[...remainingProducts,existingProduct]
        }
    }
})

export const {addToCart,removeFromCart,emptyCart,incQuantity,decQuantity} =cartSlice.actions
export default cartSlice.reducer