import { Link, router } from "expo-router";
import { SafeAreaView , Pressable, Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"; 
//import { LinearGradient } from 'expo-linear-gradient';
import colors from "../../UniversalStyles/colors";

const RegisterPage = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.outer}>
                <View style={styles.leftBackground} />
                <View style={styles.rightBackground} />
                
                <SafeAreaView style={styles.top}>
                    <Text style={styles.greetingText}>Create a RunTrotter Account!</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.bottom}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            secureTextEntry={true} // Optional for passwords
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            secureTextEntry={true} // Optional for passwords
                        />
                    </View>
                    <Link href="/Home" asChild>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText}>Start Trotting!</Text>
                        </Pressable>
                    </Link>
                    <View style={styles.haveAccountContainer}>
                        <Text style={styles.haveAccountText}>Already have an account?</Text>
                        <Link href="/Home" asChild>
                            <Pressable>
                                <Text style={styles.signInText}>Sign In</Text>
                            </Pressable>
                        </Link>
                    </View>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RegisterPage;