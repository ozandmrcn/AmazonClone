/** Image files are resolved by Metro to numeric asset IDs at build time. */
type LocalImage = import('react-native').ImageSourcePropType;

declare module '*.png' {
  const image: LocalImage;
  export default image;
}

declare module '*.jpg' {
  const image: LocalImage;
  export default image;
}

declare module '*.jpeg' {
  const image: LocalImage;
  export default image;
}
