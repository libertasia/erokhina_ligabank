import {ActionType} from './action';

const initialState = {
  conversionHistory: [],
  exchangeRate: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_RESULT:
      return {
        ...state,
        conversionHistory: [...state.conversionHistory, action.payload].slice(-10),
      };
    case ActionType.CLEAR_HISTORY:
      return {
        ...state,
        conversionHistory: [],
      };
    case ActionType.SET_EXCHANGE_RATE:
      return {
        ...state,
        exchangeRate: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
