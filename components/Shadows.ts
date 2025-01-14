// utils/Shadows.ts

import { Platform, ViewStyle } from 'react-native';

const shadows = {
  light: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1, // Shadow for Android
  },
  medium: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3, // Shadow for Android
  },
  heavy: {
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8, // Shadow for Android
  },
};

const applyShadow = (level: 'light' | 'medium' | 'heavy', shadowColor: string): ViewStyle => {
  const shadow = shadows[level]; // Get the shadow style for the level
  if (!shadow) {
    // Return a default shadow style if level is invalid
    return {};
  }

  const shadowStyle = {
    shadowColor, // Apply the color passed as argument (for iOS)
    shadowOffset: shadow.shadowOffset, // Placeholder for Android
    shadowOpacity: shadow.shadowOpacity, // Placeholder for Android
    shadowRadius: shadow.shadowRadius, // Placeholder for Android
    elevation: shadow.elevation, // Actual shadow property for Android
  };

  return Platform.select({
    ios: shadowStyle, // iOS shadow
    android: {
      ...shadowStyle,
      shadowColor: 'transparent', // On Android, shadowColor is not used, so set it to transparent
    }, // Android shadow with elevation
  }) || {}; // Ensure it always returns an empty object if platform select fails
};

export default applyShadow;
