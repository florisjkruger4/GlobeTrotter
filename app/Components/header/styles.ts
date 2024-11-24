import { StyleSheet } from 'react-native';

// Card Style Sheet

export default StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  greeting: {
    fontSize: 20,
    fontFamily: 'Open Sans'
  },
  profilePicContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 25, 
    height: 50, 
    width: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
},
  date: {
    fontSize: 11,
    fontStyle: 'italic',
    color: 'gray'
  }
});