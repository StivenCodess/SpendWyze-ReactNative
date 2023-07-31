import { ACTIONS } from "./actions";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONS.ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, payload] };
    case ACTIONS.REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
    default:
      return state;
  }
};
