import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundScreen = () => {
  return (
    <div className="container">
      <h1>404. Страница не найдена</h1>
      <Link to={AppRoute.CONVERTER}>Вернуться к конвертации</Link>
    </div>
  );
};

export default NotFoundScreen;
