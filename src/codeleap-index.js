import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from './redux';
// import { GlobalStyle } from '@Global/style';
import Routes from './routes';
import theme from './theme';

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {console.log(theme)}
      <Routes />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#codeleap-app'),
);
