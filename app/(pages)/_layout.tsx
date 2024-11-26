import { Stack } from "expo-router";

const PagesLayout = () => {
    return (
        <Stack
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
                name="Home" 
            />
            <Stack.Screen 
                name="Runs" 
            />
            <Stack.Screen 
                name="Calories" 
            />
        </Stack>
    );
};

export default PagesLayout;