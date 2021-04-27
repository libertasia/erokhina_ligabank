import {ActionCreator} from './action';
import {APIRoute, APIKey, Currency} from '../const';

const SECONDS_IN_MINUTE = 60;

const MILLISECONDS_IN_SECOND = 1000;

const formatDate = (date) => {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - (offset * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND));
  return date.toISOString().split(`T`)[0];
};

export const fetchExchangeRate = (fromCurrency = Currency.RUB, toCurrency = Currency.USD, date = new Date()) => (dispatch, _getState, api) => {
  const qParam = `${fromCurrency}_${toCurrency}`;
  const dateString = formatDate(date);
  return api.get(APIRoute.CONVERT, {
    params: {
      q: qParam,
      date: dateString,
      apiKey: APIKey,
    }
  })
    .then(({data}) => {
      const rate = data.results[qParam].val[dateString];
      dispatch(ActionCreator.setExchangeRate(rate));
    })
    .catch(() => {});
};
