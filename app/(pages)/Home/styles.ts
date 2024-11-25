import { StyleSheet } from 'react-native';

// Home Page Style Sheet

export default StyleSheet.create({
    outer: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f8fc',
    },
    container: {
        flex: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f8fc',
        //borderColor: 'red',
        //borderWidth: 1,
    },
    cardsContainer: {
        flexDirection: 'row',
        width: '85%',
        //borderColor: 'black',
        //borderWidth: 1,
    },
    cardsContainerColumn: {
        padding: 5,
        flex:50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
