import { StyleSheet } from 'react-native';

// Card Style Sheet

export default StyleSheet.create({
  cardContainer: {
    padding: 10, 
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000', // Shadow settings for React Native (iOS/Android)
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1, // Android-specific shadow
  },
  title: {
    fontSize: 16,
    fontFamily: 'Open Sans'
  },
  description: {
      fontSize: 14,
      color: 'gray',
      marginTop: 5,
      fontFamily: 'Open Sans'
  },
});