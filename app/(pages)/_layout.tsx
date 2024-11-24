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
                name="Workouts" 
            />
        </Stack>
    );
};

export default PagesLayout;