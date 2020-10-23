import generateIndex from './zindex';
import colors from './colors';

import * as flex from './mixins/flex';

const zIndexes = generateIndex();

const theme = {
  ...flex,
  zIndexes,
  colors,
};

export default theme;
