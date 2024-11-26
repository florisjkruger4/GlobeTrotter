import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native"
import styles from "./styles"; 
import Card from "../../Components/card/card";
import Header from "../../Components/header/header";
import TopBanner from "../../Components/bottomBanner/bottomBanner";
import BottomBanner from "../../Components/topBanner/topBanner";
import CalorieRing from "../../Components/calorieRing/calorieRing";

const CaloriesPage = () => {
    return (
        <View style={styles.outer}>
            <TopBanner></TopBanner>
            <View style={styles.headerContainer}> 
                <Header></Header>
            </View>
            <View style={styles.container}>
                <CalorieRing radius={150} strokeWidth={55} progress={0.85}></CalorieRing>
                <View>
                    <Text>Distance: </Text>
                    <Text>4.45 mi</Text>
                </View>
                <View>
                    <Text>Time: </Text>
                    <Text>32.53</Text>
                </View>
            </View>
            <BottomBanner></BottomBanner>
        </View>
    );
};

export default CaloriesPage;