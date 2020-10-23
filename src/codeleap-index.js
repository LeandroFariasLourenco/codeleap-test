import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from '@Routes';
import theme from '@Style/theme';
import GlobalStyles from '@Style/global';
import store from '@Redux';

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#codeleap-app'),
);
