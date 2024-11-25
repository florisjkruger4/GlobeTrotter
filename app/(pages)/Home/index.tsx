import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native"
import styles from "./styles"; 
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from "../../Components/card/card";
import Header from "../../Components/header/header";
import TopBanner from "../../Components/topBanner/topBanner";
import BottomBanner from "../../Components/bottomBanner/bottomBanner";

const HomePage = () => {
    return (
        <View style={styles.outer}>
            <TopBanner></TopBanner>
            <View style={styles.headerContainer}> 
                <Header></Header>
            </View>
            <View style={styles.container}>
                <View style={styles.cardsContainer}>
                    <View style={styles.cardsContainerColumn}>
                        <Card 
                            title="Workouts" 
                            description="This is the description for card 1."
                            icon={<FontAwesome5 name="dumbbell" size={24} color="black" />}
                            href="/Workouts"
                        />
                        <Card 
                            title="Schedule" 
                            description="This is the description for card 2. There once was a little walrus that liked to eat watermellon and poop a lot wooo hooo"
                            icon={<Ionicons name="time-sharp" size={24} color="black" />} 
                            href="/Workouts"
                        />
                        <Card 
                            title="Weight" 
                            description="This is the description for card 3." 
                            icon={<FontAwesome6 name="weight-scale" size={24} color="black" />}
                            href="/Workouts"
                        />
                        <Card 
                            title="Heart" 
                            description="This is the description for card ?." 
                            icon={<FontAwesome5 name="heartbeat" size={24} color="black" />}
                            href="/Workouts"
                        />
                    </View>
                    <View style={styles.cardsContainerColumn}>
                        <Card 
                            title="Calories" 
                            description="This is the description for card 4." 
                            icon={<FontAwesome5 name="fire" size={24} color="black" />}
                            href="/Workouts"
                            />
                        <Card 
                            title="Globe" 
                            description="A much longer description for card 5 that will dynamically expand the card's height to fit its content." 
                            icon={<FontAwesome5 name="globe-americas" size={24} color="black" />}
                            href="/Workouts"
                        />
                        <Card 
                            title="Settings" 
                            description="A much longer description for card 6 that will dynamically expand the card's height to fit its content. A much longer description for card 6 that will dynamically expand the card's height to fit its content" 
                            icon={<Ionicons name="settings-sharp" size={24} color="black" />}
                            href="/Workouts"
                        />
                    </View>
                </View>
            </View>
            <BottomBanner></BottomBanner>
        </View>
    );
};

export default HomePage;