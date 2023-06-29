import * as React from 'react';
import { Image } from 'react-native';

const SoSIcon = props => (
  <Image
    source={require('../images/sosicon.png')}
    style={{ width: 56, height: 56, marginBottom: 40 }}
  />
);

export default SoSIcon;
