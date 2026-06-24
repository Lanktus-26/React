import { useEffect, useState } from 'react';
import { artesanos, productos as productosServicio } from '../services/artesaniaService';
import type { Artesano, Producto } from '../types';

export function useProductos() {
  //Estado para almacenar la lista de productos cargados.
  const [productos, setProductos] = useState<Producto[]>([]);
  //Estado para controlar si los datos aún se están cargando.
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    //useEffect se ejecuta al iniciar el componente y carga los datos.
    const cargarProductos = () => {
      setCargando(true);
      setProductos(productosServicio);
      setCargando(false);
    };

    cargarProductos();
  }, []);

  const getArtesano = (artesanoId: string): Artesano | undefined => {
    return artesanos.find((artesano) => artesano.id === artesanoId);
  };

  //El hook devuelve los productos, el estado de carga y la función auxiliar getArtesano.
  return {
    productos,
    cargando,
    getArtesano,
  };
}
