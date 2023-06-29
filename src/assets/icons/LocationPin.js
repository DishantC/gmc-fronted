import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const LocationPin = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M17.183 7.25C16.317 3.392 12.95 1.667 10 1.667h-.008c-2.942 0-6.3 1.725-7.175 5.575-.984 4.3 1.65 7.941 4.033 10.241A4.53 4.53 0 0 0 10 18.758a4.496 4.496 0 0 0 3.142-1.275c2.383-2.3 5.016-5.933 4.041-10.233Zm-5.075 3.992a.618.618 0 0 1-.441.183.618.618 0 0 1-.442-.183l-1.208-1.209-1.242 1.242a.618.618 0 0 1-.442.183.618.618 0 0 1-.441-.183.629.629 0 0 1 0-.883L9.133 9.15 7.925 7.942a.629.629 0 0 1 0-.884.629.629 0 0 1 .883 0l1.209 1.209L11.183 7.1a.629.629 0 0 1 .884 0 .629.629 0 0 1 0 .883L10.9 9.15l1.208 1.208a.629.629 0 0 1 0 .884Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LocationPin;
