import { css } from 'styled-components';

import NotoSansBold from './NotoSansKR-Bold.otf';
import NotoSansMedium from './NotoSansKR-Medium.otf';
import NotoSansRegular from './NotoSansKR-Regular.otf';

const fonts = css`
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: local('Noto Sans') url(${NotoSansRegular}) format('otf');
  }
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    src: local('Noto Sans') url(${NotoSansMedium}) format('otf');
  }
  @font-face {
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    src: local('Noto Sans') url(${NotoSansBold}) format('otf');
  }
`;

export default fonts;
