import React from 'react';
import { View, StyleSheet } from 'react-native';
import color from '../../theme/color';
import { fsize } from '../../theme/font';
import GoIconSvg from './GoIconSvg';

const GoIconRow = ({ icons }) => {
  return (
    <View style={styles.container}>
      {icons.map((item, index) => (
        <GoIconSvg
          key={index}
          title={item.title}
          icon={item.icon}
          styles={{
            flex: 1,
            paddingHorizontal: 6,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          iconStyles={{
            height: 36,
          }}
          textStyles={{
            textAlign: 'center',
            fontSize: fsize.p1,
            color: color.black,
          }}
        />
      ))}
    </View>
  );
};

export default GoIconRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
