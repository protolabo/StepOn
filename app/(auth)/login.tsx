import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Login() {
    return (
        <ThemedView style={styles.screen}>
            <ThemedView>
                <Image source = {require('@/assets/images/Logo.png')} style={styles.logo}/>
            </ThemedView>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Connexion</ThemedText>
            </ThemedView>

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'white', 
      display: 'flex',
      flexDirection: 'column'
    },
    logo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },


    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },

  });
  