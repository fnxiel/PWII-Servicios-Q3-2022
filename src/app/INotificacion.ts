export interface INotificacion{
    id: number
    titulo: string,
    tipo: "Informacion" | "Advertencia" | "Error",
    mensaje: string
    codigo?: number,
    hora?: Date
    
  }