export const ActionType = {
    CHANGE_HAVE_AMOUNT: `data/changeHaveAmount`,
    CHANGE_NEED_AMOUNT: `data/changeNeedAmount`,
    CHANGE_HAVE_CURRENCY: `data/changeHaveCurrency`,
    CHANGE_NEED_CURRENCY: `data/changeNeedCurrency`,
    CHANGE_DATE: `data/changeDate`,
    SAVE_RESULT: `data/saveResults`,
    CLEAR_HISTORY: `data/clearHistory`,
    SET_EXCHANGE_RATE: `data/setExchangeRate`,
};

export const ActionCreator = {
    changeHaveAmount: (amount) => ({
      type: ActionType.CHANGE_HAVE_AMOUNT,
      payload: amount,
    }),
    changeNeedAmount: (amount) => ({
        type: ActionType.CHANGE_NEED_AMOUNT,
        payload: amount,
    }),
    changeHaveCurrency: (currency) => ({
        type: ActionType.CHANGE_HAVE_CURRENCY,
        payload: currency,
    }),
    changeNeedCurrency: (currency) => ({
        type: ActionType.CHANGE_NEED_CURRENCY,
        payload: currency,
    }),
    changeDate: (date) => ({
        type: ActionType.CHANGE_DATE,
        payload: date,
    }),
    saveResult: (result) => ({
        type: ActionType.SAVE_RESULT,
        payload: result,
    }),
    clearHistory: () => ({
        type: ActionType.CLEAR_HISTORY,
    }),
    setExchangeRate: (rate) => ({
        type: ActionType.SET_EXCHANGE_RATE,
        payload: rate,
    }),
  };
  
