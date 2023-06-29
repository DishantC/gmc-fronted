import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const KillBacteria = props => (
  <Svg
    width={26}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m2.875 7.75 10-4.792L23.188 7.75l-1.042 12.292-3.438 2.187-5.729 4.167v.729l-9.27-6.98L2.874 7.75Z"
        fill="#40C4FF"
      />
      <Path
        d="m25.719 6.052-12.5-6a.534.534 0 0 0-.438 0l-6.5 3.125.438.906L13 1.063l11.969 5.74-1.438 14.312-10.52 7.77-10.521-7.77L1.03 6.802l4.688-2.25-.438-.906-5 2.396a.506.506 0 0 0-.281.5l1.5 14.875c.01.135.083.27.198.354l11 8.125a.496.496 0 0 0 .302.094.519.519 0 0 0 .302-.094l11-8.125a.474.474 0 0 0 .198-.354L26 6.542a.492.492 0 0 0-.281-.49Z"
        fill="#000"
      />
      <Path
        d="M22.396 20.698a.475.475 0 0 0 .198-.354l1.27-12.604a.506.506 0 0 0-.28-.5L13.218 2.26a.534.534 0 0 0-.438 0L2.417 7.25a.506.506 0 0 0-.282.5l1.271 12.604c.01.136.084.271.198.354l9.104 6.72a.496.496 0 0 0 .302.093.518.518 0 0 0 .303-.094l5-3.687-.594-.802-4.698 3.468-8.646-6.385L3.167 7.99 13 3.27l9.833 4.72-1.208 12.03-2.917 2.157.594.802 3.094-2.281Z"
        fill="#000"
      />
      <Path
        d="M7.354 19.688h.031c.136 0 .26-.053.355-.146l2.53-2.532 4.74-4.74a.506.506 0 0 0 .146-.426.473.473 0 0 0-.26-.365 3.97 3.97 0 0 0-1.406-.448V10.5h.5v-1h-2v1h.5v.531a3.924 3.924 0 0 0-1.948.813l-.375-.375.354-.354-.709-.709-1.416 1.417.708.708.354-.354.375.375a4.02 4.02 0 0 0-.812 1.948H8.49V14H7.5v2h1v-.5h.531c.042.365.146.719.281 1.063l-1.854 1.854A6.417 6.417 0 0 1 6.49 15c0-3.583 2.916-6.5 6.5-6.5a6.47 6.47 0 0 1 3.416.969l-1.26 1.26.708.709 1.688-1.688A.495.495 0 0 0 17.49 9 7.415 7.415 0 0 0 13 7.5c-4.135 0-7.5 3.365-7.5 7.5 0 1.635.52 3.188 1.49 4.49a.515.515 0 0 0 .364.198ZM10 15a3 3 0 0 1 3.781-2.896l-3.677 3.677A2.875 2.875 0 0 1 10 15ZM14.854 21.23l.281.957a7.506 7.506 0 0 0 3.844-2.666A7.459 7.459 0 0 0 20.5 15c0-1.635-.52-3.188-1.49-4.49a.495.495 0 0 0-.364-.197.474.474 0 0 0-.386.145l-2.53 2.521-4.74 4.74-2.521 2.52a.495.495 0 0 0 .052.75 7.405 7.405 0 0 0 4.49 1.49c.354 0 .718-.02 1.072-.073l-.146-.99a6.827 6.827 0 0 1-.927.063 6.47 6.47 0 0 1-3.416-.969l1.854-1.854c.333.146.698.24 1.062.282v.53h-.5v1h2v-1h-.5v-.53a3.924 3.924 0 0 0 1.948-.813l.375.375-.354.354.709.709 1.416-1.417-.708-.709-.354.355-.375-.375a4.022 4.022 0 0 0 .812-1.948h.531v.5h1v-2H17.5v.5h-.531a4.211 4.211 0 0 0-.282-1.063l1.855-1.854a6.417 6.417 0 0 1 .968 3.417 6.47 6.47 0 0 1-1.312 3.916 6.458 6.458 0 0 1-3.344 2.344ZM16 15a3 3 0 0 1-3.781 2.896l3.677-3.677c.073.26.104.52.104.781ZM5.5 8.5h-1v1h1v-1ZM21.5 8.5h-1v1h1v-1ZM13.5 5h-1v1h1V5ZM13.5 23.5h-1v1h1v-1ZM21 19h-1v1h1v-1ZM6 19H5v1h1v-1Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default KillBacteria;