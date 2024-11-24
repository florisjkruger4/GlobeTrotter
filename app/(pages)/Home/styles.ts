import { StyleSheet } from 'react-native';

// Home Page Style Sheet

export default StyleSheet.create({
    outer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 80,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f8fc',
    },
    cardsContainer: {
        flex:1,
        flexDirection: 'row',
        width: '80%',
    },
    cardsContainerColumn: {
        padding: 10,
        flex:50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
