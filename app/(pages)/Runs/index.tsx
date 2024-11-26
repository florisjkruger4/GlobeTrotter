import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native"
import styles from "./styles"; 
import Card from "../../Components/card/card";
import Header from "../../Components/header/header";
import TopBanner from "../../Components/bottomBanner/bottomBanner";
import BottomBanner from "../../Components/topBanner/topBanner";

const WorkoutsPage = () => {
    return (
        <View style={styles.outer}>
            <TopBanner></TopBanner>
                <Text>Runs Page</Text>
            <BottomBanner></BottomBanner>
        </View>
    );
};

export default WorkoutsPage;