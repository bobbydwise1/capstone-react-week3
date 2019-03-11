import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

document.body.style.backgroundColor = 'OldLace';
const store = createStore(rootReducer);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
          <Provider store={store}>
            <Component/>
          </Provider>
      </HashRouter>
    </AppContainer>,
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
