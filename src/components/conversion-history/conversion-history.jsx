import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getConversionHistory} from '../../store/selectors';
import {ActionCreator} from '../../store/action';

const ConversionHistory = (props) => {
  const {conversionHistory, onClearHistory} = props;

  const generateHistoryMarkup = (history) => {
    return history.map((item, index) =>
      <li className="conversion-history__item" key={`history-item-${index}`}>
        <time className="conversion-history__date" dateTime={item.conversionDate}>{item.conversionDate.toLocaleDateString('ru-RU')}</time>
        <span className="conversion-history__input-amount">{item.haveAmount} {item.haveCurrency}</span>
        <span className="conversion-history__output-amount">{item.needAmount} {item.needCurrency}</span>
      </li>
    );
  };

  const onClearHistoryClick = () => {
    onClearHistory();
  };

  return (
    <React.Fragment>
        <section className="conversion-history">
            <h2 className="conversion-history__header">История конвертации</h2>
            <ul className="conversion-history__list">
              {generateHistoryMarkup(conversionHistory)}
            </ul>
            <button className="conversion-history__button button" type="button" onClick={onClearHistoryClick}>Очистить историю</button>
        </section>
    </React.Fragment>
  );
};

ConversionHistory.propTypes = {
  conversionHistory: PropTypes.arrayOf(PropTypes.shape({
    haveAmount: PropTypes.number.isRequired,
    needAmount: PropTypes.number.isRequired,
    haveCurrency: PropTypes.string.isRequired,
    needCurrency: PropTypes.string.isRequired,
    conversionDate: PropTypes.dateTime,
  })),
  onClearHistory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  conversionHistory: getConversionHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClearHistory() {
    dispatch(ActionCreator.clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
