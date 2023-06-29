import React from 'react';
import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');

const FullWidthLoader = ({ height, count, marginBottom }) => {
  return (
    <SkeletonPlaceholder borderRadius={8}>
      {Array(count || 1)
        .fill()
        .map((_, index) => (
          <SkeletonPlaceholder.Item
            key={index}
            height={height || 100}
            width={width * 0.9}
            marginBottom={marginBottom || 10}
          />
        ))}
    </SkeletonPlaceholder>
  );
};

export default FullWidthLoader;
