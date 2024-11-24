import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native"
import styles from "./styles"; 
import Card from "../../Components/card/card";
import Header from "../../Components/header/header";
import TopBanner from "../../Components/bottomBanner/bottomBanner";
import BottomBanner from "../../Components/topBanner/topBanner";

const HomePage = () => {
    return (
        <View style={styles.outer}>
            <TopBanner></TopBanner>
            <View style={styles.container}>
                <Header></Header>
                <View style={styles.cardsContainer}>
                    <View style={styles.cardsContainerColumn}>
                        <Card title="Workouts" description="This is the description for card 1.">
                            {/*<Link href="/Workouts">Go to Workouts</Link>*/}
                        </Card>
                        <Card title="Card 2" description="This is the description for card 2. There once was a little walrus that liked to eat watermellon and poop a lot wooo hooo" />
                        <Card title="Card 3" description="This is the description for card 3." />
                    </View>
                    <View style={styles.cardsContainerColumn}>
                    <Card title="Card 4" description="This is the description for card 4." />
                    <Card title="Card 5" description="A much longer description for card 5 that will dynamically expand the card's height to fit its content." />
                    </View>
                </View>
                <Link href="/Workouts">Go to Workouts</Link>
            </View>
            <BottomBanner></BottomBanner>
        </View>
    );
};

export default HomePage;