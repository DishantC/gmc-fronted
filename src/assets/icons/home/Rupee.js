import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const Rupee = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M15.022 0c8.321 0 15.022 6.745 15.022 15.022C30.044 23.299 23.299 30 15.066 30 6.7 30 0 23.3 0 15.022A14.99 14.99 0 0 1 15.022 0Zm0 29.124c7.795 0 14.102-6.306 14.102-14.102C29.124 7.27 22.774.92 15.066.92 7.226.92.92 7.182.92 15.022c-.044 7.752 6.306 14.102 14.102 14.102Z"
        fill="#000"
      />
      <Path
        d="M15.022.92C7.182.92 1.007 7.226.92 14.847A14.066 14.066 0 0 0 15.022 29.08c7.752.044 14.058-6.306 14.058-14.102C29.08 7.226 22.774.92 15.022.92Zm2.715 9.635c0 .131.132.131.22.131h2.54c.043.088 0 .132-.044.175-.35.482-.657 1.008-1.008 1.49-.087.13-.175.174-.306.174h-1.183c-.131 0-.175 0-.219.132-.481 2.365-2.058 3.504-4.335 3.942-.438.087-.876.087-1.402.13 2.584 2.716 5.08 5.388 7.577 8.06-.088.087-.132.043-.22.043h-2.89c-.175 0-.263-.044-.35-.175l-7.095-7.62a.611.611 0 0 1-.131-.395v-1.445c0-.175.043-.219.219-.219.875 0 1.751.044 2.627-.044 1.051-.131 2.015-.438 2.76-1.226.262-.306.481-.613.613-1.007.087-.22.043-.263-.176-.263H8.321c.22-.35.438-.613.613-.92.176-.263.35-.482.526-.744.087-.175.219-.175.35-.175h5.124c.307 0 .307 0 .176-.307-.438-1.139-1.314-1.708-2.497-1.97a8.191 8.191 0 0 0-1.489-.132H8.365c0-.132.044-.175.131-.263.307-.482.614-.92.92-1.401.131-.176.22-.22.438-.22h10.511c.088 0 .131 0 .219.044-.307.482-.657.92-.92 1.402-.219.35-.438.438-.832.438-.657-.044-1.314 0-2.058 0 .525.832.832 1.576.963 2.365Z"
        fill="#40C4FF"
      />
      <Path
        d="M20.496 10.686c.044.088 0 .132-.043.175-.35.482-.657 1.008-1.008 1.49-.087.13-.175.175-.306.175h-1.183c-.131 0-.175 0-.219.13-.481 2.366-2.058 3.505-4.335 3.943-.438.087-.877.087-1.402.13 2.584 2.716 5.08 5.388 7.577 8.06-.088.087-.132.043-.22.043h-2.89c-.175 0-.263-.044-.35-.175l-7.095-7.62a.611.611 0 0 1-.131-.395v-1.445c0-.175.043-.219.218-.219.876 0 1.752.044 2.628-.044 1.051-.131 2.015-.438 2.76-1.226.262-.306.481-.613.613-1.007.087-.22.043-.263-.176-.263H8.321c.22-.35.438-.613.613-.92.175-.263.35-.482.526-.744.087-.175.219-.175.35-.175h5.124c.307 0 .307 0 .176-.307-.438-1.139-1.314-1.708-2.497-1.97a8.19 8.19 0 0 0-1.489-.132H8.365c0-.132.044-.175.131-.263.307-.482.613-.92.92-1.401.131-.176.219-.22.438-.22h10.511c.088 0 .131 0 .219.044-.307.482-.657.92-.92 1.402-.219.35-.438.438-.832.438-.657-.044-1.314 0-2.058 0 .57.7.876 1.401 1.007 2.233 0 .132.131.132.219.132h2.496v.131Z"
        stroke="#000"
        strokeMiterlimit={10}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Rupee;