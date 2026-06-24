import type { Artesano, Producto } from '../types';

export const artesanos: Artesano[] = [
  {
    id: 'a1',
    nombre: 'María Pérez',
    ubicacion: 'Cusco',
    descripcion: 'Tejedora de lana andina de prendas cálidas y coloridas.',
  },
  {
    id: 'a2',
    nombre: 'Luis Torres',
    ubicacion: 'Puno',
    descripcion: 'Artesano de cerámica tradicional con acabados contemporáneos.',
  },
  {
    id: 'a3',
    nombre: 'Alicia Vargas',
    ubicacion: 'Arequipa',
    descripcion: 'Creadora de accesorios de cuero con bordados únicos.',
  },
];

export const productos: Producto[] = [
  {
    id: 'p1',
    nombre: 'Chompa de alpaca',
    artesanoId: 'a1',
    precio: 120,
    imagen: 'https://picsum.photos/seed/alpaca/600/420',
    descripcion: 'Chompa tejida a mano con detalles tradicionales andinos.',
  },
  {
    id: 'p2',
    nombre: 'Jarrón decorativo',
    artesanoId: 'a2',
    precio: 85,
    imagen: 'https://picsum.photos/seed/jarron/600/420',
    descripcion: 'Jarrón de cerámica pintado a mano con motivos regionales.',
  },
  {
    id: 'p3',
    nombre: 'Bolso de cuero',
    artesanoId: 'a3',
    precio: 95,
    imagen: 'https://picsum.photos/seed/bolso/600/420',
    descripcion: 'Bolso artesanal con bordado de hilo y acabados de primera.',
  },
];

export function getArtesanoById(id: string) {
  return artesanos.find((artesano) => artesano.id === id);
}
