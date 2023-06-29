import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownArrow = props => (
  <Svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.114 7.494a1.042 1.042 0 0 1 1.474 0l5.515 5.515 5.515-5.515a1.042 1.042 0 0 1 1.474 1.474L12.84 15.22a1.042 1.042 0 0 1-1.474 0L5.114 8.968a1.042 1.042 0 0 1 0-1.474Z"
      fill="#1F1F1F"
    />
  </Svg>
);

export default DownArrow;
