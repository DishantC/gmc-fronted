import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const EditCircle = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12.353} cy={12.353} r={12.353} fill="#EAFAFF" />
    <Path
      d="m12.95 7.08-6.16 6.519c-.232.247-.457.735-.502 1.073l-.278 2.43c-.098.878.533 1.478 1.403 1.328l2.415-.412c.338-.06.81-.308 1.043-.563l6.16-6.52c1.065-1.125 1.545-2.408-.113-3.975-1.65-1.553-2.903-1.006-3.969.12Z"
      stroke="#40C4FF"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.921 8.167a4.596 4.596 0 0 0 4.089 3.864"
      stroke="#40C4FF"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditCircle;
