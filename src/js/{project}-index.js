import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from '@Store';
import { GlobalStyle } from '@Global/style';
import Routes from '@Routes';
import theme from '@Styles/theme';

const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(
  <Main />,
  document.querySelector(`.${process.env.PROJECT_NAME}-main`)
);
