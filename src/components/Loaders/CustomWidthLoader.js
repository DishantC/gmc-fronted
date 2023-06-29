import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CustomWidthLoader = ({
  width,
  height,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  return (
    <SkeletonPlaceholder borderRadius={8}>
      <SkeletonPlaceholder.Item
        height={height || 100}
        width={width || 50}
        marginBottom={marginBottom || 10}
        marginTop={marginTop || 0}
        marginLeft={marginLeft || 0}
        marginRight={marginRight || 0}
      />
    </SkeletonPlaceholder>
  );
};

export default CustomWidthLoader;
