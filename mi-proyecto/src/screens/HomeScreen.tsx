import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard';
import { useProductos } from '../hooks/useArtesania';
import type { Producto } from '../types';

export default function HomeScreen() {
  const productos = useProductos();

  const handleOferta = (producto: Producto & { artesano: string }) => {
    Alert.alert(
      'Confirmar oferta',
      `¿Deseas enviar una oferta para ${producto.nombre} de ${producto.artesano}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Aceptar',
          onPress: () => {
            Alert.alert('¡Oferta enviada!', `Tu oferta para ${producto.nombre} fue confirmada.`);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Productos de artesanía</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <ProductCard item={item} onPressOferta={() => handleOferta(item)} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay productos disponibles.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 16,
    color: '#111',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
