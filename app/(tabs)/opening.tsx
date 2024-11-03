import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function Opening() {
    return (
        <ThemedView style={{backgroundColor: 'white'}}>
            <Image source = {require('@/assets/images/Logo.png')} style={{display : "flex"}}/>
        </ThemedView>
    )
}