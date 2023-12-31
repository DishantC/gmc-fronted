import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const UserIconDefault = props => (
  <Svg
    width={199}
    height={199}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={78.242}
      width={143.658}
      height={143.658}
      rx={36}
      transform="rotate(33 78.242 0)"
      fill="#0D59F0"
    />
    <Rect
      x={119.263}
      y={1.355}
      width={140.947}
      height={140.947}
      rx={36}
      transform="rotate(57 119.263 1.355)"
      fill="#40CEF2"
    />
    <Rect
      x={31.171}
      y={31.171}
      width={135.526}
      height={135.526}
      rx={36}
      fill="#fff"
    />
    <Path
      d="M119.175 86.805a4.593 4.593 0 0 0-3.421-1.49h-6.844v-.084c0-1.064-.412-2.085-1.113-2.766a3.713 3.713 0 0 0-2.679-1.15H92.75c-1.072 0-2.02.426-2.72 1.15a3.958 3.958 0 0 0-1.114 2.766v.085h-6.802c-1.36 0-2.556.553-3.421 1.49a5.141 5.141 0 0 0-1.443 3.532v21.193c0 1.404.536 2.638 1.443 3.532.865.894 2.102 1.489 3.421 1.489h33.64c1.36 0 2.555-.553 3.421-1.489a5.142 5.142 0 0 0 1.443-3.532V90.337c0-1.404-.536-2.638-1.443-3.532Zm-.701 24.726h-.041c0 .766-.288 1.447-.783 1.957a2.604 2.604 0 0 1-1.896.809h-33.64a2.605 2.605 0 0 1-1.896-.809 2.775 2.775 0 0 1-.783-1.957V90.337c0-.766.288-1.446.783-1.957a2.605 2.605 0 0 1 1.896-.809h7.957c.618 0 1.113-.51 1.113-1.149v-1.234c0-.468.165-.894.453-1.191.289-.298.701-.469 1.154-.469h12.327c.453 0 .865.17 1.154.469.288.297.453.723.453 1.191v1.234c0 .639.495 1.15 1.113 1.15h7.957c.742 0 1.401.297 1.896.808.495.51.783 1.192.783 1.958v21.193Z"
      fill="#3A3A3A"
    />
    <Path
      d="M98.934 90.465c-2.803 0-5.359 1.192-7.173 3.064-1.855 1.915-2.968 4.511-2.968 7.405s1.154 5.532 2.968 7.405c1.856 1.915 4.37 3.064 7.174 3.064 2.803 0 5.359-1.192 7.173-3.064 1.855-1.915 2.968-4.511 2.968-7.405s-1.155-5.532-2.968-7.405c-1.814-1.872-4.37-3.064-7.174-3.064Zm5.607 16.299c-1.443 1.447-3.422 2.383-5.606 2.383-2.185 0-4.164-.936-5.607-2.383-1.443-1.489-2.309-3.532-2.309-5.787 0-2.256.907-4.299 2.309-5.788a7.758 7.758 0 0 1 5.606-2.383c2.185 0 4.164.936 5.607 2.383 1.443 1.49 2.309 3.532 2.309 5.788.041 2.255-.866 4.298-2.309 5.787ZM113.611 94.593c1.115 0 2.02-.934 2.02-2.085 0-1.152-.905-2.085-2.02-2.085-1.116 0-2.02.933-2.02 2.085 0 1.151.904 2.085 2.02 2.085Z"
      fill="#3A3A3A"
    />
  </Svg>
);

export default UserIconDefault;
