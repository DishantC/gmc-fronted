import React from 'react';
import CustomWidthLoader from './CustomWidthLoader';

const ImageBoxLoader = ({ childWidth, count }) => {
  return (
    <>
      {Array(count || 1)
        .fill()
        .map((_, index) => (
          <CustomWidthLoader
            key={index}
            width={childWidth}
            height={75.63}
            marginRight={index === count - 1 ? 0 : 12}
          />
        ))}
    </>
  );
};

export default ImageBoxLoader;
