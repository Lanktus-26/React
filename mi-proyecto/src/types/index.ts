export type Artesano = {
  id: string;
  nombre: string;
  ubicacion: string;
  descripcion: string;
};

export type Producto = {
  id: string;
  nombre: string;
  artesanoId: string;
  precio: number;
  imagen: string;
  descripcion: string;
};

export type Oferta = {
  id: string;
  productoId: string;
  precioOferta: number;
  mensaje: string;
};
