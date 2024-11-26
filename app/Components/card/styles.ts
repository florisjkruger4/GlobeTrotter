import { StyleSheet } from 'react-native';
import colors from '../../UniversalStyles/colors';

// Card Style Sheet

export default StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    marginTop: 10,
    padding: 10, 
    backgroundColor: colors.base,
    borderRadius: 25,
    shadowColor: '#000', // Shadow settings for React Native (iOS/Android)
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1, // Android-specific shadow
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    color: colors.secondary,
    fontFamily: 'Open Sans'
  },
  description: {
      fontSize: 14,
      color: 'gray',
      marginTop: 5,
      fontFamily: 'Open Sans'
  },
});