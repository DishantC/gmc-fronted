import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchFilter from '../../assets/icons/SearchFilter';
import SearchIcon from '../../assets/icons/SearchIcon';
import color from '../../theme/color';
import SizedBoxWidth from '../Common/SizedBoxWidth';

const HomeSearch = () => {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'relative',
          flex: 1,
        }}>
        <View style={styles.search}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search For a Service"
          placeholderTextColor={color.grayLighter}
        />
      </View>
      <SizedBoxWidth />
      <SearchFilter />
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    paddingLeft: 36,
    paddingRight: 20,
    borderWidth: 0,
    borderRadius: 999,
    flex: 1,
    backgroundColor: '#E9F6FF',
  },
  search: {
    position: 'absolute',
    top: 12,
    left: 10,
    zIndex: 1,
  },
});
