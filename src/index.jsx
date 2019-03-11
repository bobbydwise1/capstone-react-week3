import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

document.body.style.backgroundColor = 'OldLace';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <AppContainer>
          <Component/>
        </AppContainer>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*eslint-enable */
