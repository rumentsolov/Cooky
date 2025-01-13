//constants/Layouts/ts

import { StyleSheet } from 'react-native';
import { COLOR } from './Colors';

export const LAYOUTS = StyleSheet.create({
  container: {
    flex: 1,
    verticalAlign: 'top',
    resizeMode: 'contain'
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
  },
  imageTop: {
    width: 50,
    height: 50,
    marginBottom: 0,
    borderRadius: 0,
    resizeMode: 'contain',
    paddingBottom: 0,
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
  },
  dot: {
    height:10,
    borderRadius:5,
    backgroundColor:COLOR.GreenLight,
    marginHorizontal:8
  },
  inputField: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 12,
    width: '90%',
    alignSelf: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
   
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dishContainer: {
    width: '48%', // Two dishes per row with a little margin
    marginBottom: 16,
    backgroundColor: COLOR.Transparent,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  dishImage: {
    width: '50%',
    height: 120,
    resizeMode: 'cover',
  },
  dishName: {
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
