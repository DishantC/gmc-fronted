import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CorrectCircle = props => (
  <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24 0C10.776 0 0 10.776 0 24s10.776 24 24 24 24-10.776 24-24S37.224 0 24 0Zm11.472 18.48L21.864 32.088a1.798 1.798 0 0 1-2.544 0l-6.792-6.792a1.81 1.81 0 0 1 0-2.544 1.81 1.81 0 0 1 2.544 0l5.52 5.52 12.336-12.336a1.81 1.81 0 0 1 2.544 0c.696.696.696 1.824 0 2.544Z"
      fill="#18C03D"
    />
  </Svg>
);

export default CorrectCircle;
