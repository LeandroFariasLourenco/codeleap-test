import styled, { css } from 'styled-components';
import { rem } from 'polished';

const btnReset = css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  line-height: normal;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const btnStyle = css`
  ${btnReset}
  padding: ${rem(8)} ${rem(20)};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.button`
  ${(props) => (props.reset ? btnReset : btnStyle)}
`;
