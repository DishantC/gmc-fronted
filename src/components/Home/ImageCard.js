import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RightArrow from '../../assets/icons/RightArrow';
import color from '../../theme/color';
import commonStyles from '../../theme/common';

const { width } = Dimensions.get('window');

const ImageCard = ({ image, title, description, buttnText, buttonAction }) => {
  return (
    <View style={styles.mainWrap}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.contentwrap}>
        <View>
          <Text style={commonStyles.h2Text}>{title}</Text>
          <Text
            style={{
              color: color.black,
              ...commonStyles.smallText,
            }}>
            {description}
          </Text>
        </View>

        <TouchableOpacity onPress={buttonAction} style={styles.actionButton}>
          <Text
            style={{
              color: color.black,
              ...commonStyles.buttonText,
            }}>
            {buttnText}
          </Text>
          <RightArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  mainWrap: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.borderColor,
  },
  image: {
    borderRadius: 10,
    width: '50%',
    height: '100%',
  },
  actionButton: {
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentwrap: {
    justifyContent: 'space-between',
    maxWidth: width / 2 - 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
});
