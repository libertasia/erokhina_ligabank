import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {getExchangeRate} from '../../store/selectors';
import {Currency} from '../../const';
import {fetchExchangeRate} from '../../store/api-actions';
import "flatpickr/dist/flatpickr.min.css";
import Flatpickr from 'react-flatpickr';

const availableCurrencies = [Currency.RUB, Currency.USD, Currency.EUR, Currency.GBP, Currency.CNY];

const generateCurrencyOptionMarkup = () => {
  return availableCurrencies.map((currency) =>
    <option value={currency} key={`currency-${currency}`}>{currency}</option>
    );
};

const roundToFourDecimals = (num) => {
  return Math.round((num + Number.EPSILON) * 10000) / 10000;
};

const ConversionForm = (props) => {
  const {exchangeRate, onParamsChanged, onSaveResult} = props;

  const [haveAmount, setHaveAmount] = useState(1000);
  const [needAmount, setNeedAmount] = useState(1000);
  const [conversionDate, setConversionDate] = useState(new Date())
  const [haveCurrency, setHaveCurrency] = useState(Currency.RUB)
  const [needCurrency, setNeedCurrency] = useState(Currency.USD)

  useEffect(() => {
    setNeedAmount(roundToFourDecimals(haveAmount * exchangeRate));
  }, [exchangeRate, haveAmount]);

  useEffect(() => {
    onParamsChanged(haveCurrency, needCurrency, conversionDate);
  }, [haveCurrency, needCurrency, conversionDate, onParamsChanged]);


  const onHaveAmountChange = (evt) => {
    setHaveAmount(parseInt(evt.target.value));
    setNeedAmount(roundToFourDecimals(parseInt(evt.target.value) * exchangeRate));
  };

  const onNeedAmountChange = (evt) => {
    setNeedAmount(parseInt(evt.target.value));
    setHaveAmount(roundToFourDecimals(parseInt(evt.target.value) / exchangeRate));
  };

  const onHaveCurrencyChange = (evt) => {
    setHaveCurrency(evt.target.value);
  };

  const onNeedCurrencyChange = (evt) => {
    setNeedCurrency(evt.target.value);
  };

  const onDateChange = (selectedDates, dateStr, instance) => {
    const pattern = /(\d{1,2})\.(\d{2})\.(\d{4})/;
    const dt = new Date(dateStr.replace(pattern,'$3-$2-$1'));
    setConversionDate(dt);
  };

  const onSaveResultClick = () => {
    onSaveResult(haveAmount, needAmount, haveCurrency, needCurrency, conversionDate)
  };

  return (
    <React.Fragment>
      <form className="conversion-form" action="#" method="get">
        <div className="conversion-form__input-amount currency">
        <div className="currency__amount">
          <label className="currency__label" htmlFor="input_amount">У меня есть</label>
          <input id="input_amount" className="currency__input" type="number" name="input_amount" value={haveAmount} onChange={onHaveAmountChange}/> 
        </div>
        <label htmlFor="from_currency" className="visually-hidden">Выбрать валюту</label>
        <select className="currency__select" name="from_currency" id="from_currency" defaultValue={Currency.RUB} onChange={onHaveCurrencyChange}>
        {generateCurrencyOptionMarkup()}
        </select>
        </div>
        <div className="conversion-form__output-amount currency">
        <div className="currency__amount">
          <label className="currency__label" htmlFor="output_amount">Хочу приобрести</label>
          <input id="output_amount" className="currency__input" type="number" name="output_amount" value={needAmount} onChange={onNeedAmountChange}/>
        </div>
        <label htmlFor="to_currency" className="visually-hidden">Выбрать валюту</label>
        <select className="currency__select" name="to_currency" id="to_currency" defaultValue={Currency.USD} onChange={onNeedCurrencyChange}>
        {generateCurrencyOptionMarkup()}
        </select>
        </div>
        <div className="conversion-form__calendar">
        <label className="visually-hidden" htmlFor="date">Дата</label>
        <Flatpickr 
          className="conversion-form__date"
          defaultValue={conversionDate.toLocaleDateString()}
          onChange={onDateChange}
          options={{
            dateFormat: "j.m.Y",
            maxDate: "today",
            minDate: new Date().fp_incr(-7)
          }}/>
        </div> 
        <button className="conversion-form__button button" type="button" onClick={onSaveResultClick}>Сохранить результат</button>
      </form>
    </React.Fragment>
  );
};

ConversionForm.propTypes = {
  exchangeRate: PropTypes.number.isRequired,
  onParamsChanged: PropTypes.func.isRequired,
  onSaveResult: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
  exchangeRate: getExchangeRate(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSaveResult(haveAmount, needAmount, haveCurrency, needCurrency, conversionDate) {
    dispatch(ActionCreator.saveResult({
      haveAmount,
      needAmount,
      haveCurrency,
      needCurrency,
      conversionDate
    }));
  },
  onParamsChanged(haveCurrency, needCurrency, exchangeDate) {
    dispatch(fetchExchangeRate(haveCurrency, needCurrency, exchangeDate));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionForm);
