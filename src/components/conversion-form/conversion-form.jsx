import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {ActionCreator} from '../../store/action';
import {getHaveAmount, getNeedAmount, getHaveCurrency, getNeedCurrency, getConversionDate, getExchangeRate} from '../../store/selectors';

const ConversionForm = (props) => {
  const {exchangeRate} = props;

  const [haveAmount, setHaveAmount] = useState(1000);
  const [needAmount, setNeedAmount] = useState(1000);
  const [conversionDate, setConversionDate] = useState(new Date())

  const roundToTwoDecimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  useEffect(() => {
    setNeedAmount(roundToTwoDecimals(haveAmount * exchangeRate));
  }, [exchangeRate, haveAmount]);


  const onHaveAmountChange = (evt) => {
    setHaveAmount(evt.target.value);
    setNeedAmount(roundToTwoDecimals(parseInt(evt.target.value) * exchangeRate));
  }

  const onNeedAmountChange = (evt) => {
    setNeedAmount(evt.target.value);
    setHaveAmount(roundToTwoDecimals(parseInt(evt.target.value) / exchangeRate));
  }

  return (
    <React.Fragment>
      <form className="conversion-form" action="#" method="get">
        <div className="conversion-form__input-amount currency">
        <div className="currency__amount">
          <label className="currency__label" htmlFor="input_amount">У меня есть</label>
          <input id="input_amount" className="currency__input" type="number" name="input_amount" value={haveAmount} onChange={onHaveAmountChange}/> 
        </div>
        <label htmlFor="from_currency" className="visually-hidden">Выбрать валюту</label>
        <select className="currency__select" name="from_currency" id="from_currency">
          <option value="RUB" selected>RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBR">GBR</option>
          <option value="CNY">CNY</option>
        </select>
        </div>
        <div className="conversion-form__output-amount currency">
        <div className="currency__amount">
          <label className="currency__label" htmlFor="output_amount">Хочу приобрести</label>
          <input id="output_amount" className="currency__input" type="number" name="output_amount" value={needAmount} onChange={onNeedAmountChange}/>
        </div>
        <label htmlFor="to_currency" className="visually-hidden">Выбрать валюту</label>
        <select className="currency__select" name="to_currency" id="to_currency">
          <option value="RUB">RUB</option>
          <option value="USD" selected>USD</option>
          <option value="EUR">EUR</option>
          <option value="GBR">GBR</option>
          <option value="CNY">CNY</option>
        </select>
        </div>
        {/* <div className="conversion-form__calendar flatpickr">
        <label className="visually-hidden" htmlFor="date">Дата</label>
        <input className="conversion-form__date" id="date" type="text" name="date" defaultValue="1.12.2020" />
        <span className="conversion-form__icon-calendar" type="button"></span>
        </div> */}
        <div className="conversion-form__calendar">
        <label className="visually-hidden" htmlFor="date">Дата</label>
        <input className="conversion-form__date" id="date" type="text" name="date" value={conversionDate.toLocaleDateString()} />
        </div> 
        <button className="conversion-form__button button" type="button">Сохранить результат</button>
      </form>
    </React.Fragment>
  );
};

ConversionForm.propTypes = {

};
  
const mapStateToProps = (state) => ({
  haveAmount: getHaveAmount(state),
  needAmount: getNeedAmount(state),
  haveCurrency: getHaveCurrency(state),
  needCurrency: getNeedCurrency(state),
  conversionDate: getConversionDate(state),
  exchangeRate: getExchangeRate(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {

  },
  onSaveResult(haveAmount, needAmount, haveCurrency, needCurrency, conversionDate) {
    dispatch(ActionCreator.saveResult({
      haveAmount,
      needAmount,
      haveCurrency,
      needCurrency,
      conversionDate
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionForm);
