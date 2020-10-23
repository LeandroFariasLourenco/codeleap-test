import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input,
  button {
    outline: none;
  }

  button {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
