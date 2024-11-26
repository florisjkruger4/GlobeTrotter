import { StyleSheet } from 'react-native';
import colors from '../../UniversalStyles/colors';

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
    color: colors.secondary,
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