export const ActionType = {
    SAVE_RESULT: `data/saveResults`,
    CLEAR_HISTORY: `data/clearHistory`,
    SET_EXCHANGE_RATE: `data/setExchangeRate`,
};

export const ActionCreator = {
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
  
