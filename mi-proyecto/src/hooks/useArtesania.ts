import { useMemo } from 'react';
import { getArtesanoById, productos } from '../services/artesaniaService';
import type { Producto } from '../types';

export function useProductos() {
  return useMemo(() => {
    return productos.map((producto) => ({
      ...producto,
      artesano: getArtesanoById(producto.artesanoId)?.nombre ?? 'Artesano desconocido',
    }));
  }, []);
}

type ProductoConArtesano = Producto & { artesano: string };

export type { ProductoConArtesano };
