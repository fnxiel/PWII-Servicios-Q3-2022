export interface INotificacion{
    id: number
    tipo: "Informacion" | "Advertencia" | "Error",
    mensaje: string
  }