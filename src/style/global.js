import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

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

  input {
    &::placeholder {
      font-size: ${rem(14)};
      color: #ccc;
    }
  }

  button {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
