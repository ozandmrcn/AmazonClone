import type { RootStackParamList } from '../models';

/**
 * Shared route names for the navigator and the components that navigate.
 * `as const` narrows the values to literals so invalid routes fail type checking.
 */
export const SCREENS = {
  HOMESCREEN: 'Home',
  PRODUCTSCREEN: 'Products',
} as const satisfies Record<string, keyof RootStackParamList>;
