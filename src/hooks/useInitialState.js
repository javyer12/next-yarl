import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
  isSigned: false,
  users: [],
};

const useInitialState = () => {
  const [ state, setState ] = useState(initialState);

  class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  };

  const createUser = (data) => {
    const user = new User(data);
    // console.log("created", user);
    state.users.push(user);
  };

  createUser("carl", "di@gmail", "sdfdfdd");
  // console.log("from user", state.users);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [ ...state.cart, payload ],
    });
  };
  const signed = () => {
    // aqui llamar a la funcion crear usuario
    setState({
      ...state,
      isSigned: true,
    });
  }
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    signed,
    User,
    createUser
  };
};

export default useInitialState;
