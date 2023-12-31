import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = ({ fill }) => (
  <Svg width={16} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M16 12.863v4.556c0 .444-.13.58-.55.58-1.726 0-3.46-.006-5.186 0-.175 0-.22-.054-.22-.232.006-1.209.006-2.425.006-3.634-.006-1.147-.75-2.035-1.83-2.179-1.151-.15-2.238.82-2.257 2.05-.02 1.236-.013 2.472 0 3.715 0 .233-.065.287-.272.28-1.707-.006-3.408-.006-5.115-.013-.46 0-.57-.13-.57-.615 0-2.985 0-5.977-.006-8.962 0-.3.084-.512.285-.717C2.619 5.281 4.94 2.856 7.269.438c.57-.587 1.365-.587 1.921.02 2.205 2.412 4.41 4.83 6.616 7.24.149.165.175.356.175.561v4.583c.006.02.012.02.019.02Z"
      fill={fill}
    />
  </Svg>
);

export default SvgComponent;
