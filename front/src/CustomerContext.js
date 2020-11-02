import React, { useReducer, createContext, useContext, useRef } from "react";

const initalCustomers = [
  {
    id: 1,
    text: "Backend 개발자",
    done: true
  },
  {
    id: 2,
    text: "Frontend 개발자",
    done: false
  },
  {
    id: 3,
    text: "관전자",
    done: true
  },
];

function customerReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.customer);
    case "TOGGLE":
      return state.map((customer) =>
        customer.id === action.id ? { ...customer, done: !customer } : customer
      );
    case "REMOVE":
      return state.filter((customer) => customer.id !== action.id);

    default:
      new Error(`Unhandled action type: ${action.type}`);
  }
}

const CustomerStateContext = createContext();
const CustomerDispatchContext = createContext();
const CustomerNextIdContext = createContext();

export function CustomerProvider({ children }) {
  const [state, dispatch] = useReducer(customerReducer, initalCustomers);
  const nextId = useRef(4);

  return (
    <CustomerStateContext.Provider value={state}>
      <CustomerDispatchContext.Provider value={dispatch}>
        <CustomerNextIdContext.Provider value={nextId}>
            {children}
        </CustomerNextIdContext.Provider>
      </CustomerDispatchContext.Provider>
    </CustomerStateContext.Provider>
  );
}

/*
    나중에 다른파일에서
    import {useCustomerState, useCustomerDispatch} from 'CustomerContext경로' 의 식으로 사용가능
 */

export function useCustomerState() {
  const context = useContext(CustomerStateContext);

  if (!context) {
    throw new Error("Cannot find CustomerProvider");
  }

  return context;
}

export function useCustomerDispatch() {
  const context = useContext(CustomerDispatchContext);

  if (!context) {
    throw new Error("Cannot find CustomerProvider");
  }
}

export function useCustomerNextId() {
  const context = useContext(CustomerNextIdContext);

  if (!context) {
    throw new Error(`Cannot find CustomerProvider`);
  }

  return context;
}