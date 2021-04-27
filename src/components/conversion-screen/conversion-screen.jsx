import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../img/logo.svg';
import sprite from '../../img/sprite.svg';
import {AppRoute} from '../../const';
import ConversionForm from '../conversion-form/conversion-form';
import ConversionHistory from '../conversion-history/conversion-history';

const ConversionScreen = () => {

  return (
    <React.Fragment>
      <header className="header">
        <nav className="header__navigation container">
          <Link className="logo" to={AppRoute.INFO}>
            <img className="logo__image" src={logo} width={28} height={25} alt="Логотип Лига Банк»" />
            <p className="logo__text"><span className="logo__text--first">Лига</span> Банк</p>
          </Link>
          <ul className="site-navigation">
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.INFO}>Услуги</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.LOAN}>Рассчитать кредит</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link site-navigation__link--active" to={AppRoute.CONVERTER}>Конвертер валют</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.CONTACTS}>Контакты</Link></li>
            <li className="site-navigation__item"><Link className="site-navigation__link" to={AppRoute.QUESTION}>Задать вопрос</Link></li>
          </ul>
          <ul className="user-navigation">
            <li className="user-navigation__item"><Link className="user-navigation__link" to={AppRoute.LOGIN}>Войти в Интернет-банк</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="promo">
          <div className="container promo__container">
            <p className="promo__bank-title">Лига Банк</p>
            <p className="promo__text">Кредиты на любой случай</p>
            <Link className="promo__link" to={AppRoute.LOAN}>Рассчитать кредит</Link>
          </div>
        </div>
        <div className="container">
          <h1 className="main__header">Конвертер валют</h1>
          <ConversionForm />
          <ConversionHistory />
        </div>
      </main>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__copyright copyright">
            <Link className="copyright__logo logo" to={AppRoute.INFO} >
              <img className="logo__image" src={logo} width={28} height={25} alt="Логотип Лига Банк»" />
              <p className="logo__text"><span className="logo__text--first">Лига</span> Банк</p>
            </Link>
            <p className="copyright__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 © Лига Банк, 2019</p>
          </div>
          <ul className="footer__navigation footer-navigation">
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.INFO}>Услуги</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.LOAN}>Рассчитать кредит</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.CONTACTS}>Контакты</Link></li>
            <li className="footer-navigation__item"><Link className="footer-navigation__link" to={AppRoute.QUESTION}>Задать вопрос</Link></li>
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
                    <use href={sprite + `#icon-facebook`} />
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link social__link--instagram" href="https://www.instagram.com/" aria-label="Мы в Инстаграме">
                  <span className="visually-hidden">Инстаграм</span>
                  <svg className="social__icon-instagram" width={16} height={16}>
                    <use href={sprite + `#icon-instagram`} />
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link social__link--twitter" href="https://twitter.com/" aria-label="Мы в Твиттере">
                  <span className="visually-hidden">Твиттер</span>
                  <svg className="social__icon-twitter" width={16} height={13}>
                    <use href={sprite + `#icon-twitter`} />
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link social__link--youtube" href="https://www.youtube.com/" aria-label="Мы на Ютюб">
                  <span className="visually-hidden">Ютюб</span>
                  <svg className="social__icon-youtube" width={16} height={13}>
                    <use href={sprite + `#icon-youtube`} />
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
