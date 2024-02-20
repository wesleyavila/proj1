import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";

import { Participante } from "components/Participante";

export function Home() {
    const participantes = [
        "Teste","Teste 1","Teste 2","Teste 3",
        "Teste 4","Teste 5","Teste 6","Teste 7",
        "Teste 8","Teste 9"]
    function removerParticipante(nome: String){
        Alert.alert("Aviso",`Participante ${nome} removido`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>domingo, 18 de fevereiro de 2024</Text>
            
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'#6b6b6b'}
                    //keyboardType="email-address"
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
            
                showsVerticalScrollIndicator={false}
                data={participantes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Participante
                        onRemove={() => removerParticipante(item)} 
                        name={item}
                    />                     
                )}
                ListEmptyComponent={()=>(
                    <Text style={styles.listavazia}>Nenhum registro encontrado</Text>
                )}
            />

            {/* <ScrollView showsVerticalScrollIndicator={false}>

            {
                participantes.map(participante => (
                    <Participante
                        onRemove={() => removerParticipante(participante)} 
                        name={participante}
                    />                
                ))                
            }
            </ScrollView> */}
        </View>
    )
}