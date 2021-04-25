import React from 'react';

const ConversionHistory = () => {

  return (
    <React.Fragment>
        <section className="conversion-history">
            <h2 className="conversion-history__header">История конвертации</h2>
            <ul className="conversion-history__list">
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            <li className="conversion-history__item">
                <time className="conversion-history__date" dateTime="2020-11-25">25.11.2020</time>
                <span className="conversion-history__input-amount">1000 RUB</span>
                <span className="conversion-history__output-amount">13,1234 USD</span>
            </li>
            </ul>
            <button className="conversion-history__button button" type="button">Очистить историю</button>
        </section>
    </React.Fragment>
  );
};

export default ConversionHistory;
