import { StyleSheet } from 'react-native';
import colors from '../../UniversalStyles/colors';

// Workouts Page Style Sheet

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
});
