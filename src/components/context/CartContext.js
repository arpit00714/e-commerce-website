import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const url = "https://crudcrud.com/api/4dfa8707b2a94e62b0aae85659d2b771/";

  const [cartItems, setcartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  //const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));


  const userEmail = user?.email?.replace(/\.|@/g, "");

  // const loginHandler = (token) => {
  //   setToken(token);
  //   localStorage.setItem('token',token)
  // };

  const loginHandler = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getItems = async () => {
    if (user && userEmail) {
      const res = await fetch(url + userEmail);
      const data = await res.json();
      setcartItems(data);
      let quantity = 0;
      data.forEach((item) => {
        quantity = quantity + item.quantity;
      });
      setQuantity(quantity);
    }
  };

  const addItemToCartHandler = async (product, quantity) => {
    try {
      const res = await fetch(url + userEmail, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
    getItems();

    // setQuantity( prevQty => prevQty + quantity)
    // const checkProductInCart = cartItems.find((item) => item.id === product.id);

    // if(checkProductInCart) {
    //   const updatedcartItems = cartItems.map(item => {
    //     if(item.id === product.id) {
    //     return {
    //         ...item,
    //         quantity: item.quantity + quantity
    //       }
    //     }}
    //     )
    //   setcartItems(updatedcartItems);
    // } else {
    //   product.quantity = quantity
    //   setcartItems([...cartItems, product ]);
  };

  // const removeItemFromCartHandler = (id) => {
  //   const newcartItems = cartItems.filter(item => item.id !== id);
  //   let foundItem = cartItems.find((item) => item.id === id);

  //   if (quantity > 0) setQuantity(prevQty => prevQty - 1)
  //   if (foundItem.quantity > 1) {
  //     setcartItems([...newcartItems, { ...foundItem, quantity: foundItem.quantity - 1 } ])
  //   } else {

  //     setcartItems(newcartItems);
  //   }

  // };

  const cartContext = {
    user,
    cartItems,
    totalAmount: 0,
    totalQty: quantity,
    addItem: addItemToCartHandler,
    login: loginHandler,
    getItems,
    // removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
