import {ActionCreator} from './action';
import {APIRoute, APIKey} from '../const';

const formatDate = (date) => {
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - (offset*60*1000))
  return date.toISOString().split('T')[0]
}

export const fetchExchangeRate = (fromCurrency = `RUB`, toCurrency = `USD`, date = new Date()) => (dispatch, _getState, api) => {
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
    .catch((error) => console.log(error));
};
