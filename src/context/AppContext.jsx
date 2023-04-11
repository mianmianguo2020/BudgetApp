import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 8000,
  expenses: [
    { id: uuidv4(), name: "Shopping", cost: 70 },
    { id: uuidv4(), name: "Holiday", cost: 380 },
    { id: uuidv4(), name: "Transportation", cost: 90 },
    { id: uuidv4(), name: "Fuel", cost: 70 },
    { id: uuidv4(), name: "Child Care", cost: 900 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
