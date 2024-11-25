import { StyleSheet, Switch, Text, View, TouchableOpacity } from "react-native"
import styles from "./styles"; 
import { useEffect, useState, ReactNode } from "react";
import { Gyroscope, GyroscopeMeasurement } from 'expo-sensors'
import { Link } from "expo-router"; 

type CardProps = {
    title: string;
    description: string;
    href: string;
    icon: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, icon, href }) => {

    const [gyroData, setGyroData] = useState({x:0, y:0, z:0})

    useEffect(() => {
        let subscription: { remove: () => void } | undefined;
    
        subscription = Gyroscope.addListener((gyroscopeData: GyroscopeMeasurement) => {
            setGyroData({
              x: gyroscopeData.x || 0,
              y: gyroscopeData.y || 0,
              z: gyroscopeData.z || 0,
            });
          });
    
        return () => {
          subscription.remove();
        };
      }, []);

    return (
      <Link href={href} asChild>
        <TouchableOpacity activeOpacity={0.8}>
                <View
                    style={[
                        styles.cardContainer,
                        {
                            transform: [
                                { translateX: gyroData.y * 1 },
                                { translateY: -gyroData.x * 2 },
                            ],
                        },
                    ]}
                >
                    <View>{icon}</View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableOpacity>
      </Link>
    );
};

export default Card;
