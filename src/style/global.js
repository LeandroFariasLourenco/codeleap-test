import { createGlobalStyle, css } from 'styled-components';
import { rem } from 'polished';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  input,
  textarea,
  button {
    outline: none;
  }

  input,
  textarea {
    &::placeholder {
      font-size: ${rem(14)};
      color: #ccc;
    }
  }

  textarea {
    resize: none;
  }

  button {
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  .popup-overlay {
    ${({ theme }) => css`
      z-index: ${theme.zIndexes.overlay} !important;
      background-color: ${theme.colors.overlay};
    `}
  }

  .transition {
    &-enter {
      opacity: 0;
      transform: scale(0.9);

      &-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
      }
    }

    &-exit {
      opacity: 1;

      &-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 300ms, transform 300ms;
      }
    }
  }
`;
