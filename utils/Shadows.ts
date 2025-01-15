// utils/Shadows.ts
import { Platform, ViewStyle } from 'react-native';

const defaultShadow = {
  shadowColor: "#1B3C3D", // Default shadow color if none is specified
  shadowOffset: { width: 6, height: 6 }, // Offset for the shadow
  shadowOpacity: 0.5, // Opacity of the shadow
  shadowRadius: 10, // Blur radius for the shadow
  elevation: 25, // Android elevation
};

const applyShadowIOS = (shadowColor: string = defaultShadow.shadowColor): ViewStyle => ({
  shadowColor, // Override shadow color if provided
  shadowOffset: defaultShadow.shadowOffset,
  shadowOpacity: defaultShadow.shadowOpacity,
  shadowRadius: defaultShadow.shadowRadius,
});


const applyShadowAndroid = (shadowColor: string = defaultShadow.shadowColor): ViewStyle => ({
  elevation: defaultShadow.elevation,
  shadowColor,
});

const applyShadow = (shadowColor: string = defaultShadow.shadowColor): ViewStyle => {
  if (Platform.OS === 'ios') {
    return applyShadowIOS(shadowColor);
  } else if (Platform.OS === 'android') {
    return applyShadowAndroid(shadowColor);
  }
  return {}; 
};

export default applyShadow;
