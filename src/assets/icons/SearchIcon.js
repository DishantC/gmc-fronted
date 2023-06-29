import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = props => (
  <Svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.158 13.492a6.33 6.33 0 1 0 0-12.66 6.33 6.33 0 0 0 0 12.66ZM14.872 12.74c-.232-.428-.724-.667-1.384-.667-.499 0-.928.204-1.18.555-.253.351-.31.822-.155 1.293.302.913.83 1.117 1.117 1.152a.81.81 0 0 0 .134.007c.309 0 .787-.133 1.25-.829.373-.541.443-1.082.218-1.51Z"
      fill="#2CD9FF"
      fillOpacity={0.51}
    />
  </Svg>
);

export default SearchIcon;
