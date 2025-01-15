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
  paddingLR25Container: {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom:0,
    paddingLeft: 25,
    paddingRight: 25,
  },
  imageTop: {
    flex:0.3,
    width: 40,
    height: 40,
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
    flexGrow: 0.7,
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
    marginBottom: 0,
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
    flex:1,
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  arrowContainerLeft: {
    position: "absolute",
    left: 20,
    top: "0%",
    zIndex: 1,
    backgroundColor: COLOR.Transparent,
    padding: 10,
    borderRadius: 50,
  },
  arrowContainerRight: {
    position: "absolute",
    right: 20,
    top: "0%",
    zIndex: 1,
    backgroundColor: COLOR.Transparent,
    padding: 10,
    borderRadius: 50,
  },
  safeAreaContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  flatListContent: {
    paddingBottom: 64, // Ensure there's enough space at the bottom for the Clear Basket button
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainerRow: {
    flexDirection: 'row', // Items inside will be aligned horizontally
    justifyContent: 'space-between', // Space between the elements
    alignItems: 'center', // Vertically center-align elements
    marginBottom: 15, // Space between list items
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  dishNameFl2: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 2, // Ensures the dish name takes up more space
  },
  qtyContainer: {
    flexDirection: 'row', // Arrange qty-related buttons and text horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
  },
  qty: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    width: 40,
  },
  iconButton: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
  },
  clearButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  clearButtonStyle: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
