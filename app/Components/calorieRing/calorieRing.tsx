import { StyleSheet, Text, View } from "react-native"
import styles from "./styles"
import SVG, { Circle } from 'react-native-svg'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from "react"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CalorieRingProps = {
    radius: number;
    strokeWidth: number;
    progress: number
}

const CalorieRing = ({ radius, strokeWidth, progress }: CalorieRingProps) => {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, {duration: 900 });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    return (
        <View style={{ width: radius * 2, height: radius * 2, }}>
            <SVG>
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius} 
                    fill="none"
                    strokeWidth={strokeWidth}
                    stroke='#37FF8B'
                    opacity={0.2}
                />
                <AnimatedCircle
                    animatedProps={animatedProps}
                    cx={radius}
                    cy={radius}
                    r={innerRadius} 
                    fill="none"
                    strokeWidth={strokeWidth}
                    stroke='#37FF8B'
                    strokeLinecap="round"
                    rotation="-90"
                    originX={radius}
                    originY={radius}
                />
            </SVG>
            <FontAwesome5 name="fire" style={styles.icons} size={strokeWidth * 0.5} top={strokeWidth * 0.23} />
        </View>
    );
};

export default CalorieRing;
