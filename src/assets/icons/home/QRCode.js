import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const QRCode = props => (
  <Svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.712 19.067a4.324 4.324 0 0 1 2.83-4.08c1.707-.624 3.622-.166 4.83 1.208 1.207 1.374 1.457 3.33.54 4.912-.207.375-.166.541.126.833 1.04.999 2.04 1.998 3.039 3.039.416.416.374.5-.084.957-.5.5-.54.5-.957.084-1.04-1.041-2.082-2.04-3.122-3.123-.25-.25-.417-.25-.708-.083-2.914 1.665-6.494-.416-6.494-3.747Zm4.33 3.122c1.748 0 3.163-1.415 3.121-3.122 0-1.665-1.415-3.08-3.08-3.08-1.707 0-3.122 1.373-3.122 3.08s1.373 3.122 3.08 3.122Z"
      fill="#40C4FF"
      stroke="#000"
      strokeWidth={0.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M6.26 13.697c-.082-1.082-.082-1.082 1-1.082.583 0 1.124.041 1.707 0 .375 0 .458.125.458.458 0 .582.333.832.874.624.25-.083.125-.333.167-.5.041-.166-.125-.457.124-.5a1.42 1.42 0 0 1 .833 0c.208.084.083.376.083.542-.041.375.083.541.458.458.458-.083.666.083.583.583-.083.375.125.5.458.458.166 0 .458-.125.541.083.083.25.083.583 0 .833-.041.208-.291.124-.416.124-.541-.083-.666.167-.625.625.042.167-.041.333-.041.5a4.015 4.015 0 0 0-1 0V15.07c0-.25-.083-.375-.332-.333H9.675c-.5 0-.333.333-.333.583 0 .25-.084.5.333.5.707 0 .707.04.707.749v.332c-1.04-.124-1.04-.124-1.04.916 0 1.166 0 1.166-1.208 1.166H6.47c-.416 0-.333-.291-.333-.5 0-.208-.166-.582.333-.54h1.457c.458.04.333-.292.333-.542 0-.25.125-.541-.333-.541-.79.041-1.582-.042-2.373 0-.458.041-.458-.25-.458-.541 0-.292-.041-.542.417-.542.749.042.666.084.666-.665v-.458.041c.083 0 .166.042.25.042.749.041.749.041.79.75 0 .124 0 .249.167.332.583.208.916-.042.916-.666V13.99c0-.25-.083-.334-.333-.334-.541 0-1.124 0-1.707.042ZM8.3 11.532H5.596c-.292 0-.458-.041-.458-.416V5.579c0-.333.125-.416.416-.416h5.495c.375 0 .458.125.458.458v5.453c0 .375-.125.458-.5.458H8.302Zm.084-5.287h-1.79c-.291 0-.375.084-.375.375v3.497c0 .25.042.375.375.375h3.538c.25 0 .334-.084.334-.334V6.62c0-.291-.125-.375-.375-.375H8.384ZM11.506 23.189v2.747c0 .292-.083.416-.374.416H5.553c-.333 0-.375-.124-.375-.416V20.4c0-.291.084-.416.375-.416h5.579c.333 0 .374.125.374.416v2.79Zm-1.04 0v-1.79c0-.25-.084-.334-.334-.334h-3.58c-.25 0-.333.084-.333.334v3.58c0 .25.083.333.292.333h3.58c.291 0 .375-.125.333-.375.042-.624.042-1.207.042-1.748ZM19.999 8.327V5.579c0-.333.125-.416.416-.416h5.495c.375 0 .458.125.416.458v5.453c0 .375-.125.458-.457.458-1.79 0-3.58-.041-5.37 0-.417 0-.5-.125-.5-.5.041-.915 0-1.79 0-2.705Zm3.122 2.165h1.79c.25 0 .416-.042.375-.334V6.62c0-.25-.084-.375-.333-.375h-3.58c-.25 0-.334.084-.334.375v3.538c0 .292.125.375.375.375.583-.083 1.124-.041 1.707-.041Z"
      fill="#000"
    />
    <Path
      d="M30.531 24.687c-.042.666.083 1.457-.083 2.207-.375 2.04-2.082 3.538-4.205 3.622-1.249.041-2.456 0-3.705 0-.291 0-.375-.084-.375-.375-.041-1-.041-1 .958-1h2.748c2.04 0 3.288-1.248 3.288-3.288v-3.247c0-.333.042-.458.417-.458.915 0 .915 0 .915.874.042.541.042 1.04.042 1.665ZM1.016 6.828c.041-.624-.084-1.415.041-2.165A4.46 4.46 0 0 1 5.387 1h3.538c.292 0 .417.042.417.416 0 .958 0 .958-.916.958H5.595c-1.998 0-3.247 1.29-3.247 3.247v3.33c0 .333-.125.417-.417.417-.915 0-.915 0-.915-.875V6.828ZM30.531 6.995v1.998c0 .291-.083.375-.375.375-.957.041-.957.041-.957-.916V5.454c0-1.748-1.332-3.039-3.08-3.08h-3.456c-.333 0-.5-.083-.5-.458.042-.874 0-.874.916-.874h2.998c2.497 0 4.37 1.873 4.454 4.37v1.583ZM7.093 29.183h1.832c.333 0 .416.125.416.417 0 .915 0 .915-.915.915-1.208 0-2.415.084-3.622-.041-2.123-.25-3.705-2.04-3.747-4.205-.041-1.207 0-2.414 0-3.663 0-.333.083-.458.458-.458.874 0 .874 0 .874.832v3.04c0 1.79 1.29 3.08 3.08 3.122.542.041 1.083.041 1.624.041Z"
      fill="#40C4FF"
      stroke="#000"
      strokeWidth={0.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M16.835 8.368h-2.082c0-.374-.041-.79-.041-1.165 0-1.083 0-1.083-1.083-.916 0-1.124 0-1.124 1.124-1.124 1 0 1 0 1 1v.332c0 .75 0 .75.749.791.291 0 .333.125.333.375-.042.25-.042.5 0 .707ZM16.793 8.41c.625 0 1.25-.042 1.832-.042.458 0 .25.334.291.542 0 .208.125.458-.291.5-.791.04-.75.04-.75.832 0 .374.084.79-.041 1.124-.167.416-.666 0-.958.25 0-.125-.041-.25-.041-.333-.042-.75-.042-.75-.791-.791-.25 0-.333-.125-.292-.334.042-.25-.208-.582.209-.707.25-.083.666.125.79-.125.167-.291.042-.624.042-.916.042-.042 0 0 0 0ZM16.835 12.531c.083 0 .208.042.291.042.708 0 .75 0 .75-.708 0-.458.291-.333.54-.374.25 0 .584-.084.5.374-.083.583.125.791.708.708.5-.083.375.291.375.541 0 .25.083.541-.375.5a21.786 21.786 0 0 0-2.331 0c-.375 0-.5-.125-.458-.5v-.583ZM14.712 8.368c0 .583-.042 1.166-.042 1.749 0 .291-.083.375-.375.375-.457 0-.915-.042-1.373 0-.292 0-.375-.084-.375-.375 0-.666 0-.708.624-.666.375 0 .458-.125.417-.458-.042-.208 0-.416 0-.583.416-.042.79-.042 1.124-.042Z"
      fill="#000"
    />
    <Path
      d="M13.63 8.368c-1.041-.083-1.041-.083-1.041-1.124v-.083c0-.999 0-.999 1.04-.874v2.081ZM17.876 6.162v-.458c-.084-.458.124-.583.582-.583.375 0 .5.084.458.458-.041.458 0 .874 0 1.332 0 .458-.291.292-.5.292-.207 0-.54.125-.54-.292v-.749ZM22.08 13.114c.167.541-.208.5-.541.541-.458.042-.5-.208-.5-.54 0-.417.125-.542.542-.5.416-.042.666.041.5.5ZM13.588 12.531c0 .25 0 .5.041.75.042.291-.083.374-.374.374-.708 0-.833-.166-.708-.874.042-.208.166-.166.291-.208.292 0 .542.042.75-.042ZM13.63 21.607c.124.458-.126.5-.5.5-.417 0-.541-.084-.541-.5 0-.417.083-.583.54-.583.459.041.584.166.5.583ZM13.63 23.73c.124.458-.126.5-.5.5-.5.041-.5-.167-.541-.583 0-.458.166-.5.54-.5.459 0 .584.167.5.583ZM12.505 17.86c.042.375.125.791-.041 1.166l-.042-.042c-.291-.125-.666.125-.833-.125-.208-.25-.083-.666-.041-.999h.957ZM13.588 12.531c0-.125.041-.208.041-.333 0-.707.084-.749.791-.666.25.042.25.125.25.333 0 .208-.083.458.083.666-.374.084-.749.084-1.165 0ZM16.877 12.531a2.75 2.75 0 0 1-1.166 0c0-.041.041-.125.041-.166.042-.874.209-.958 1.124-.75a1.71 1.71 0 0 0 0 .916c-.041 0 0 0 0 0ZM24.203 13.114c.125.458-.125.5-.5.541-.374 0-.54-.083-.54-.5 0-.374.041-.582.54-.582.459 0 .625.125.5.541ZM6.26 14.655c-.207 0-.457 0-.665.041-.333.042-.375-.125-.416-.416-.042-.5.083-.708.624-.625.166.042.333 0 .5 0a2.695 2.695 0 0 0-.042 1ZM11.548 17.86c-1.04.083-1.04.083-1.124-1 .375-.04.75-.04 1.124 0a4.015 4.015 0 0 0 0 1Z"
      fill="#000"
    />
    <Path
      d="M15.67 12.531c.082.167.04.333.04.5 0 .624-.207.791-.832.624-.125-.041-.208-.124-.208-.25 0-.29-.083-.582.042-.874.374.084.666.084.957 0 .042 0 0 0 0 0ZM12.464 19.026c.25 0 .5-.042.749-.042.375-.042.458.125.416.458-.041.541-.416.79-.915.583-.167-.083-.084-.167-.125-.292-.042-.25.124-.54-.125-.707ZM12.505 16.86c.209 0 .417 0 .625-.04.333-.042.5.04.5.457 0 .458-.084.666-.583.583h-.542a1.379 1.379 0 0 0 0-1ZM8.3 9.41c-.998 0-.998 0-.998-1.042 0-1.082 0-1.082 1.082-1.082 1 0 1 0 1 1 0 1.123 0 1.123-1.083 1.123ZM7.26 23.147c0-1 0-1 1.04-1 1.083 0 1.083 0 1.083 1.083 0 1 0 1-1.04 1-1.083 0-1.083 0-1.083-1.083ZM23.163 7.286c1.04 0 1.04 0 1.04 1.04 0 1.083 0 1.083-1.04 1.083-1.041 0-1.041 0-1.041-1.04 0-1.083 0-1.083 1.04-1.083Z"
      fill="#000"
    />
  </Svg>
);

export default QRCode;
