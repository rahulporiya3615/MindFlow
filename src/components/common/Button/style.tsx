import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  // Variants
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  // Sizes
  smallSize: {
    height: 36,
    paddingHorizontal: 12,
  },
  mediumSize: {
    height: 48,
  },
  largeSize: {
    height: 56,
  },
  // Text styles
  text: {
    // fontFamily: typography.fontFamily.medium,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
  },
  secondaryText: {
    color: colors.white,
    fontSize: 16,
  },
  outlineText: {
    color: colors.primary,
    fontSize: 16,
  },
  ghostText: {
    color: colors.primary,
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
