import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Connexion réussie!", "Vous êtes maintenant connecté.");
            // Rediriger vers une autre page si nécessaire
        } catch (error) {
            console.error("Erreur de connexion :", error);
            Alert.alert("Erreur de connexion");
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ marginBottom: 10, borderBottomWidth: 1, padding: 10 }}
            />
            <TextInput
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ marginBottom: 20, borderBottomWidth: 1, padding: 10 }}
            />
            <Button title="Se connecter" onPress={handleLogin} />
        </View>
    );
};

export default Login;