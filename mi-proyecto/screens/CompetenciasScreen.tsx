import { View, Text, StyleSheet, Image } from 'react-native';

const tux = require('../assets/Tux.png');

export default function CompetenciasScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={tux}
        style={styles.avatar}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Competencias</Text>

      <Text>• Desarrollo Web</Text>
      <Text>• React Native</Text>
      <Text>• Bases de Datos</Text>
      <Text>• Redes</Text>
      <Text>• Soporte Técnico</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});