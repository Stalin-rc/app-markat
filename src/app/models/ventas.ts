export interface Ventas{
    id:number;
    cliente: string;
    productos: string;
    precioTotal: number;
    credito: boolean;
    fechaVenta: string;
    comprobante: boolean;
}