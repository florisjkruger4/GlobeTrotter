import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../UniversalStyles/colors';

// Register Page Style Sheet 

// Get screen width
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    outer: {
        flex: 1,
        position: 'relative', 
    },
    leftBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: width / 2, 
        backgroundColor: colors.secondary,
        zIndex: -1, 
    },
    rightBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: width / 2, 
        backgroundColor: colors.accent,
        zIndex: -1, 
    },
    top: {
        flex: 30,
        backgroundColor: colors.accent, 
        borderBottomLeftRadius: 95,
        justifyContent: 'center'
    },
    greetingText: {
        color: colors.secondary,
        fontSize: 42,
        fontFamily: 'Open Sans',
        padding: 20,
        fontWeight: 500,
    },
    bottom: {
        flex: 70,
        backgroundColor: colors.secondary, 
        borderTopRightRadius: 95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: width * 0.75
        
    },
    input: {
        color: colors.accent,
        opacity: 1,
        fontFamily: 'Open Sans',
        fontSize: 16,
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(55, 255, 139, 0.5)', 
        margin: '4%', 
    },
    button: {
        width: width * 0.75,
        height: '8%',
        backgroundColor: colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: '5%', 
        marginTop: '10%', 
    },
    buttonText: {
        color: colors.secondary,
        fontWeight: 700,
    },
    haveAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '40%',
        width: width * 0.75
    },
    haveAccountText: {
        color: colors.accent,
    },
    signInText: {
        color: colors.accent,
        fontWeight: 500,
    }
});
