import { generateMedia } from 'styled-media-query';

import generateIndex from './zindex';
import colors from './colors';
import mediaQuery from './media';

import * as flex from './mixins/flex';

const zIndexes = generateIndex();
const mq = generateMedia(mediaQuery);

const theme = {
  ...flex,
  ...mediaQuery,
  zIndexes,
  colors,
  mq,
};

export default theme;
