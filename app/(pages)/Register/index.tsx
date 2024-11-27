import { Link, router } from "expo-router";
import { SafeAreaView , Pressable, Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"; 
//import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "", password2: "" });
    const [error, setError] = useState(null);

    const handleChange = (name:string, value:string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async () => {
        try {
            console.log("Attempting API call with: " + formData)
            const response = await axios.post("http://127.0.0.1:8000/api/accounts/register/", formData);
            console.log("SUCCESS!!!")
            console.log(response.data); // Handle success
        } catch (err: any) {
            setError(err.response?.data || "An error occurred"); // Handle error
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.outer}>
                <View style={styles.leftBackground} />
                <View style={styles.rightBackground} />
                
                <SafeAreaView style={styles.top}>
                    <Text style={styles.greetingText}>Create a JoggleTrot Account!</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.bottom}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            onChangeText={(text) => handleChange("username", text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            onChangeText={(text) => handleChange("email", text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            secureTextEntry={true} // Optional for passwords
                            onChangeText={(text) => handleChange("password", text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="rgba(55, 255, 139, 0.5)"
                            secureTextEntry={true} // Optional for passwords
                            onChangeText={(text) => handleChange("password2", text)}
                        />
                    </View>
                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Start Trotting!</Text>
                    </Pressable>
                    {error && <Text>{JSON.stringify(error)}</Text>}
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