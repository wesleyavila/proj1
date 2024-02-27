import { useState }  from 'react';

import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from "react-native";
import { styles } from "./styles";

import { Participante } from "components/Participante";

export function Home() {
    const [participantes, setParticipantes] = useState([])
    const [participante, setParticipante] = useState('')

    function removerParticipante(nome: String){
        Alert.alert("Aviso",`Remover participante ${nome}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipantes(
                    participantes.filter(participante => participante !== nome)
                )

            },
            {
                text: 'Não',
                style: 'cancel'
            }            
        ])
    }

    function adicionarParticipante(){
        if (participantes.includes(participante)){
            return Alert.alert('Aviso!',`Já existe o participante ${participante} na lista`)
        }
        if (participante == ''){
            return Alert.alert('Aviso!',`Campo não pode ser em branco!`)
        }        
        setParticipantes(prevState => [...prevState, participante])
        setParticipante('')
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
                    onChangeText={setParticipante}
                    value={participante}
                    //keyboardType="email-address"
                />
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={adicionarParticipante}
                >
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