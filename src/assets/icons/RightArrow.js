import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrow = props => (
  <Svg
    width={11}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m4.084 10.79 2.988-3.532c.353-.417.353-1.1 0-1.516L4.084 2.21"
      stroke="#000"
      strokeWidth={1.593}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default RightArrow;
