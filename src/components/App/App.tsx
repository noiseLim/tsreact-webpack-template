import { FC, StrictMode, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../constants/routes';

interface AppState {}

const App: FC<AppState> = () => {
  return (
    <StrictMode>
      <Switch>
        <Route>
          <Suspense fallback={<h1>Loading...</h1>}>
            {routes.map(({ path, component, exact }) => (
              <Route key={path} exact={exact} path={path} component={component} />
            ))}
            <Redirect to='/home' />
          </Suspense>
        </Route>
      </Switch>
    </StrictMode>
  );
};

export default App;
