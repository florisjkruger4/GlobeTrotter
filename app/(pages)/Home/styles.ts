import { StyleSheet } from 'react-native';
import colors from '../../UniversalStyles/colors';

// Home Page Style Sheet

export default StyleSheet.create({
    outer: {
        flex: 1,
    },
    headerContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    container: {
        flex: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
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
    icons: {
        fontSize: 18,
        color: colors.secondary,
    },
});
