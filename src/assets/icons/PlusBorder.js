import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const PlusBorder = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.358 4H8.65C5.737 4 4 5.736 4 8.648v6.696C4 18.264 5.737 20 8.65 20h6.7c2.913 0 4.65-1.736 4.65-4.648V8.648C20.008 5.736 18.271 4 15.358 4Zm-.152 8.6h-2.602v2.6c0 .328-.272.6-.6.6a.604.604 0 0 1-.6-.6v-2.6H8.802a.605.605 0 0 1-.6-.6c0-.328.272-.6.6-.6h2.602V8.8c0-.328.272-.6.6-.6.328 0 .6.272.6.6v2.6h2.602c.328 0 .6.272.6.6 0 .328-.272.6-.6.6Z"
      fill="#fff"
    />
    <Rect
      x={1}
      y={1}
      width={22}
      height={22}
      rx={5}
      stroke="#fff"
      strokeWidth={0.5}
      strokeDasharray="1 1"
    />
  </Svg>
);

export default PlusBorder;
