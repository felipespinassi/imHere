import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Felipe",
    "Elias",
    "Roseli",
    "Fernando",
    "Ana",
    "Denise",
    "Mayk",
    "Otavio",
    "Eduardo",
    "Jefferson",
  ];

  function handleParticipantAdd() {
    console.log("adicionou");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removeu ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleParticipantAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
