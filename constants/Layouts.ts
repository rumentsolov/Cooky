// constants/Layouts.ts
import { StyleSheet } from 'react-native';

export const LAYOUTS = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    marginTop: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scrollContent: {
    paddingBottom: 16, // Adjust padding as needed
  },
  // Add more reusable layout styles as needed
});
