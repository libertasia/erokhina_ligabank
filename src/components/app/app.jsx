import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ConversionScreen from '../conversion-screen/conversion-screen';
import '../../scss/style.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <ConversionScreen />
      </Route>
      <Route exact path={AppRoute.CONVERTER}>
        <ConversionScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default App;
