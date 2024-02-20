import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Key } from "react";

type Props = {
    name: String,
    onRemove: () => void
}
export function Participante(props: Props) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {props.name}
            </Text>
            <TouchableOpacity onPress={props.onRemove} style={styles.button}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
            </TouchableOpacity>            
        </View>
    )
}