import {Currency} from '../const';
import {ActionType} from './action';

const initialState = {
  haveAmount: 1000,
  needAmount: 0,
  haveCurrency: Currency.RUB,
  needCurrency: Currency.USD,
  conversionDate: new Date(),
  conversionHistory: [],
  exchangeRate: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_HAVE_AMOUNT:
      return {
        ...state,
        haveAmount: action.payload,
      };
    case ActionType.CHANGE_NEED_AMOUNT:
      return {
        ...state,
        needAmount: action.payload,
      };
    case ActionType.CHANGE_HAVE_CURRENCY:
      return {
        ...state,
        haveCurrency: action.payload,
      };
    case ActionType.CHANGE_NEED_CURRENCY:
      return {
        ...state,
        needCurrency: action.payload,
      };
    case ActionType.CHANGE_DATE:
      return {
        ...state,
        conversionDate: action.payload,
      };
    case ActionType.SAVE_RESULT:
      return {
        ...state,
        conversionHistory: [...state.conversionHistory, action.payload],
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
