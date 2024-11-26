import { StyleSheet, Switch, Text, View, TouchableOpacity } from "react-native"
import styles from "./styles"; 
import { useEffect, useState, ReactNode } from "react";
import { Gyroscope, GyroscopeMeasurement } from 'expo-sensors'
import { Link } from "expo-router"; 

type CardProps = {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
    content: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, icon, href, content }) => {

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
                                { translateX: gyroData.y * 2 },
                                { translateY: -gyroData.x * 3 },
                            ],
                        },
                    ]}
                >
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {icon}
                  </View>
                  <Text style={styles.description}>{description}</Text>
                  {content}
                </View>
            </TouchableOpacity>
      </Link>
    );
};

export default Card;
