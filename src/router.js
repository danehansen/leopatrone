import App from './App/App';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => {
  return import('./pages/Home/Home');
});
const Wedding1 = lazy(() => {
  return import('./pages/Wedding1/Wedding1');
});
const Wedding2 = lazy(() => {
  return import('./pages/Wedding2/Wedding2');
});

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Suspense fallback={<div />}>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Wedding1} exact path="/wedding1" />
            <Route component={Wedding2} exact path="/wedding2" />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}
