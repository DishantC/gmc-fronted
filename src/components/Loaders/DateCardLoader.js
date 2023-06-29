import React from 'react';
import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');

const DateCardLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={8}>
      <SkeletonPlaceholder.Item height={21.45} width={150} marginBottom={10} />
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          height={37.45}
          width={(width * 0.9 - 5) / 2}
          marginRight={10}
        />
        <SkeletonPlaceholder.Item
          height={37.45}
          width={(width * 0.9 - 10) / 2}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default DateCardLoader;
