import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext=createContext();

const getLocalCartData=()=>{
    let newCartData=localStorage.getItem("naCart");
    if(newCartData === "[]" || !newCartData){
        return [];
    }

    try {
    return JSON.parse(newCartData);
  } catch (e) {
    return [];
  }
};

const initialState = {
//   cart: [],
cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 30000,
};

const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer, initialState);

   const addToCart=(id,color,amount,product)=>{
     dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

//to add data in local storage
  
useEffect(()=>{
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("naCart", JSON.stringify(state.cart));
},[state.cart]);


    return(
        <CartContext.Provider value={{ ...state, addToCart,removeItem, clearCart,setDecrease,setIncrement,}}>{children}</CartContext.Provider>
    );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export {CartProvider,useCartContext};