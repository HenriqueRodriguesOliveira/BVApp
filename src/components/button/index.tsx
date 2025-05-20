import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props = {
    title: string
}

export function Button({ title }: Props) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}