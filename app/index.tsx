import { Redirect } from "expo-router";
import { View } from "react-native";

const RootPage = () => {
    return (
        <View>
            <Redirect href="/Register" />
        </View>
    );
};

export default RootPage;