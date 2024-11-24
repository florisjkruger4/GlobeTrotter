import { StyleSheet, Text, View } from "react-native"
import styles from "./styles"; 

const Header = () => {

    const date = new Date().toLocaleDateString();

    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.greeting}>Hi, Floris</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.profilePicContainer}></View>
        </View>
    );
};

export default Header;
