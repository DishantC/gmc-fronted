import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = props => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.266 8.233H1.662M8.463 15.034V1.431"
      stroke="#0D59F0"
      strokeWidth={2.015}
      strokeLinecap="round"
    />
  </Svg>
);

export default PlusIcon;
