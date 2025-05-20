import { Button, StyleSheet, Text, View } from "react-native";
import api from "../services/api";


export default function Index() {
    async function buscar() {
        try {
            const result = await api.get('https://brapi.dev/api/quote/PETR4?token=epp143SLsGVXwqTuqQTpzS')
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Banco do Brasil</Text>
            <Text style={styles.title}>BBAS3</Text>

            <Text style={styles.description}>Money Flow</Text>
            <Text style={styles.description}>Comparison by day</Text>

            <Button title="Aperta" onPress={() => buscar()} />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        gap: 5,
        backgroundColor: "#0f0f0f"
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    description: {
        color: "#ccc"
    }
})