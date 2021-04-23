import React from 'react';
import logo from '../../img/logo.svg';
import sprite from '../../img/sprite.svg';

const ConversionScreen = () => {
  
  return (
    <React.Fragment>
        <header className="header">
          <nav className="header__navigation container">
            <a className="logo" href="info.html">
              <img className="logo__image" src={logo} width={28} height={25} alt="Логотип Лига Банк»" />
              <p className="logo__text"><span className="logo__text--first">Лига</span> Банк</p>
            </a>
            <ul className="site-navigation">
              <li className="site-navigation__item"><a className="site-navigation__link" href="info.html">Услуги</a></li>
              <li className="site-navigation__item"><a className="site-navigation__link" href="loan.html">Рассчитать кредит</a></li>
              <li className="site-navigation__item"><a className="site-navigation__link" href="converter.html">Конвертер валют</a></li>
              <li className="site-navigation__item"><a className="site-navigation__link" href="contacts.html">Контакты</a></li>
              <li className="site-navigation__item"><a className="site-navigation__link" href="question.html">Задать вопрос</a></li>
            </ul>
            <ul className="user-navigation">
              <li className="user-navigation__item"><a className="user-navigation__link" href="login.html">Войти в Интернет-банк</a></li>
            </ul>
          </nav>
        </header>
        <main className="main container">
          <div className="promo">
            <p>Лига Банк</p>
            <p>Кредиты на любой случай</p>
            <a className="promo__link" href="loan.html">Рассчитать кредит</a>
          </div>
          <h1 className="main__header">Конвертер валют</h1>
          <form className="conversion-form" action="#" method="get">
            <div className="conversion-form__input-amount currency">
              <div className="currency__amount">
                <label className="currency__label" htmlFor="input_amount">У меня есть</label>
                <input id="input_amount" className="currency__input" type="number" name="input_amount" defaultValue={1000} /> 
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
                <input id="output_amount" className="currency__input" type="number" name="output_amount" defaultValue="13.1234" />
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
            <div className="conversion-form__calendar">
              <label className="visually-hidden" htmlFor="date">Дата</label>
              <input className="conversion-form__date" id="date" type="text" name="date" defaultValue="1.12.2020" />
            </div>
            <button className="conversion-form__button button" type="button">Сохранить результат</button>
          </form>
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
        </main>
        <footer className="footer">
          <div className="container footer__container">
            <div className="footer__copyright copyright">
              <a className="copyright__logo logo" href="info.html" >
                <img className="logo__image" src={logo} width={28} height={25} alt="Логотип Лига Банк»" />
                <p className="logo__text"><span className="logo__text--first">Лига</span> Банк</p>
              </a>
              <p className="copyright__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 © Лига Банк, 2019</p>        
            </div>
            <ul className="footer__navigation footer-navigation">
              <li className="footer-navigation__item"><a className="footer-navigation__link" href="info.html">Услуги</a></li>
              <li className="footer-navigation__item"><a className="footer-navigation__link" href="loan.html">Рассчитать кредит</a></li>
              <li className="footer-navigation__item"><a className="footer-navigation__link" href="contacts.html">Контакты</a></li>
              <li className="footer-navigation__item"><a className="footer-navigation__link" href="question.html">Задать вопрос</a></li>
            </ul>
            <div className="footer__contacts-mobile contacts">
              <span className="contacts__number">*0904</span>
              <p className="contacts__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </div>
            <div className="footer__contacts contacts">
              <span className="contacts__number">8 800 111 22 33</span>
              <p className="contacts__text">Бесплатный для всех городов России</p>
            </div>
            <section className="footer__social social">
              <h2 className="visually-hidden">Ссылки на соцсети</h2>
              <ul className="social__list">
                <li className="social__item">
                  <a className="social__link social__link--facebook" href="https://www.facebook.com/" aria-label="Мы в Фейсбуке">
                    <span className="visually-hidden">Фейсбук</span>
                    <svg className="social__icon-facebook" width={9} height={16}>
                      <use href={sprite + "#icon-facebook"} />
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link social__link--instagram" href="https://www.instagram.com/" aria-label="Мы в Инстаграме">
                    <span className="visually-hidden">Инстаграм</span>
                    <svg className="social__icon-instagram" width={16} height={16}>
                      <use href={sprite + "#icon-instagram"} />
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link social__link--twitter" href="https://twitter.com/" aria-label="Мы в Твиттере">
                    <span className="visually-hidden">Твиттер</span>
                    <svg className="social__icon-twitter" width={16} height={13}>
                      <use href={sprite + "#icon-twitter"} />
                    </svg>
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link social__link--youtube" href="https://www.youtube.com/" aria-label="Мы на Ютюб">
                    <span className="visually-hidden">Ютюб</span>
                    <svg className="social__icon-youtube" width={16} height={13}>
                      <use href={sprite + "#icon-youtube"} />
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </footer>
    </React.Fragment>
  );
};

export default ConversionScreen;
