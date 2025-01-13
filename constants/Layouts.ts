import { StyleSheet } from 'react-native';
import { COLOR } from './Colors';

export const LAYOUTS = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'contain',
  },
  swipeContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainerTop: {
    marginTop: 30,
    padding: 0,
    backgroundColor: COLOR.GreenOlive,
    alignItems: 'flex-start',
  },
  imageTop: {
    width: 50,
    height: 50,
    marginBottom: 0,
    borderRadius: 0,
    resizeMode: 'contain',
  },
  scrollContent: {
    padding: 0,
    paddingBottom: 64,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  titleContainer: {
    marginBottom: 16,
    textAlign: 'center',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
