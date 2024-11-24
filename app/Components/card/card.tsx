import { StyleSheet, Switch, Text, View } from "react-native"
import styles from "./styles"; 
import { useEffect, useState } from "react";
import { Gyroscope, GyroscopeMeasurement } from 'expo-sensors'

type CardProps = {
    title: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {

    const [gyroData, setGyroData] = useState({x:0, y:0, z:0})
    const [gyroEnabled, setGyroEnabled] = useState(false)

    useEffect(() => {
        let subscription: { remove: () => void } | undefined;
    
        if (gyroEnabled) {
          subscription = Gyroscope.addListener((gyroscopeData: GyroscopeMeasurement) => {
            setGyroData({
              x: gyroscopeData.x || 0,
              y: gyroscopeData.y || 0,
              z: gyroscopeData.z || 0,
            });
          });
        } else {
          subscription?.remove();
        }
    
        return () => {
          subscription?.remove();
        };
      }, [gyroEnabled]);

      const handleGyroToggle = () => {
        setGyroEnabled(!gyroEnabled)
      }

    return (
        <View style={[
            styles.cardContainer, 
            {
              transform: [
                { translateX: gyroData.y * 1 },
                { translateY: -gyroData.x * 1 },
              ],
            }
          ]}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Switch 
                thumbColor={gyroEnabled? 'green' : 'red'}
                onValueChange={handleGyroToggle}
            ></Switch>
        </View>
    );
};

export default Card;
