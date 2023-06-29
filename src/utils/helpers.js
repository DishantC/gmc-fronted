export const onLayout = event => {
  const { x, y, height, width } = event.nativeEvent.layout;

  // eslint-disable-next-line
  console.log(
    'onLayout',
    'x: ' + x,
    'y: ' + y,
    'height: ' + height,
    'width: ' + width,
  );
};
