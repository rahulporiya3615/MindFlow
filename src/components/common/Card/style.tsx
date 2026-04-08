import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../../theme';

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.md,
  },
  elevated: {
    backgroundColor: colors.surface,
  },
  outlined: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filled: {
    backgroundColor: colors.surfaceSecondary,
  },
});
export default styles;
