import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [], // {id, name, price, qty, image}
};

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD': {
      const exists = state.items.find(i => i.id === action.item.id);
      const items = exists
        ? state.items.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.items, { ...action.item, qty: 1 }];
      return { ...state, items };
    }
    case 'REMOVE': {
      const items = state.items.filter(i => i.id !== action.id);
      return { ...state, items };
    }
    case 'UPDATE_QTY': {
      const { id, qty } = action;
      const items = state.items.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i);
      return { ...state, items };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      if (raw) dispatch({ type: 'INIT', payload: JSON.parse(raw) });
    } catch {}
  }, []);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch {}
  }, [state]);

  const totalItems = useMemo(() => state.items.reduce((s, i) => s + i.qty, 0), [state.items]);
  const subtotal = useMemo(() => state.items.reduce((s, i) => s + i.qty * (i.price || 0), 0), [state.items]);

  const value = useMemo(() => ({
    items: state.items,
    totalItems,
    subtotal,
    addItem: (item) => dispatch({ type: 'ADD', item }),
    removeItem: (id) => dispatch({ type: 'REMOVE', id }),
    updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty }),
    clear: () => dispatch({ type: 'CLEAR' })
  }), [state.items, totalItems, subtotal]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
