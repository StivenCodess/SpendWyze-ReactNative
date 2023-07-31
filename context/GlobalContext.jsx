import { createContext, useContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";
import { ACTIONS } from "./actions";

const Context = createContext();
export const useGetGlobalContext = () => useContext(Context);

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: ACTIONS.ADD_TRANSACTION, payload: transaction });
  };

  const removeTransaction = (id) =>
    dispatch({ type: ACTIONS.REMOVE_TRANSACTION, payload: id });

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
