import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

// ── Variables con distintos tipos de datos ──
const nombre: string = "Gerardo Piña";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 9.2;
const titulado: boolean = false;

export default function App() {
return (
<View style={styles.container}>

<Image
  source={{ uri: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/kalilinux-p12taakph0re2uh7nrwzib.png/kalilinux-zmtwzcvv6yqdbudyh97d4.png?_a=DATAiZiuZAA0' }}
  style={styles.avatar}
/>

<Text style={styles.titulo}>{nombre}</Text>
<Text style={styles.subtitulo}>{carrera}</Text>
<Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
<Text style={styles.dato}>Promedio: {promedio}</Text>
<Text style={styles.dato}>Titulado: {String(titulado)}</Text>

<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,    // la mitad del width/height = círculo
    marginBottom: 16,
  },

titulo: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 4,
},
subtitulo: {
fontSize: 14,
color: '#666',
marginBottom: 16,
},
dato: {
fontSize: 16,
marginBottom: 6,
},
});