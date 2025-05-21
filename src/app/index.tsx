import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import api from "../services/api";

type Acao = {
    longName: string;
    shortName: string;
    symbol: string;
    currency: string;
}

type ApiResponse = {
    results: Acao[]
}

export default function Index() {
    const [acao, setAcao] = useState<Acao | null>(null);
    const [historico, setHistorico] = useState<Acao | null>(null)
    const [carregando, setCarregando] = useState<boolean>(true)

    useEffect(() => {
        api.get('https://brapi.dev/api/quote/PETR4?token=epp143SLsGVXwqTuqQTpzS')
            .then(response => {
                const resultado = response.data.results[0];
                setAcao(resultado);
            })
            .catch(error => {
                console.log('Erro ao buscar título:', error);
            })
            .finally(() => {
                setCarregando(false);
            })
    }, [])

    return (
        <View style={styles.container}>
            {
                carregando ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : acao ? (
                    <View style={styles.container}>
                        <Text style={styles.title}>Ação: {acao.symbol}</Text>
                        <Text style={styles.description}>{acao.longName}</Text>
                    </View>
                ) : (
                    <Text>Erro ao carregar os dados</Text>
                )
            }


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#0f0f0f",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold"
    },
    description: {
        color: "#ccc"
    },
    grafico: {
        backgroundColor: "#FFF",
        width: 360,
        height: 200,
        marginTop: 30
    }
})