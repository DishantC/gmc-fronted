import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SavedAddress = props => (
  <Svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.746 6.533C16.691 2.02 12.593 0 9.002 0h-.01C5.41 0 1.322 2.019.257 6.524c-1.197 5.031 2.009 9.293 4.91 11.984A5.634 5.634 0 0 0 9.002 20a5.59 5.59 0 0 0 3.824-1.492c2.902-2.691 6.107-6.943 4.92-11.975Zm-5.417.81-4.057 3.9a.768.768 0 0 1-.538.215.768.768 0 0 1-.538-.215L5.675 9.781a.716.716 0 0 1 0-1.034.788.788 0 0 1 1.075 0l.984.946 3.52-3.384a.788.788 0 0 1 1.075 0 .716.716 0 0 1 0 1.034Z"
      fill="#40C4FF"
    />
  </Svg>
);

export default SavedAddress;
