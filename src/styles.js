import { createGlobalStyle } from 'styled-components';

import EuclidCircularAMedium from './fonts/EuclidCircularA-Medium-WebXL.woff2'
import EuclidCircularARegular from './fonts/EuclidCircularA-Regular-WebXL.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'EuclidCircularA';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${EuclidCircularARegular}) format('woff2');
  }

  @font-face {
    font-family: 'EuclidCircularA';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${EuclidCircularAMedium}) format('woff2');
  }
`;