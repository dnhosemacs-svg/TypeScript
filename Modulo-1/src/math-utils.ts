export function calcularMedia(array: number[]): number | null {
    if (array.length === 0) {
      return null;
    }
  
    const suma = array.reduce((acumulado, valor) => acumulado + valor, 0);
    return suma / array.length;
  }
  
  export function calcularMediana(array: number[]): number | null {
    if (array.length === 0) {
      return null;
    }
  
    const ordenado = [...array].sort((a, b) => a - b); // copia para no mutar
    const mitad = Math.floor(ordenado.length / 2);
  
    if (ordenado.length % 2 === 0) {
      return (ordenado[mitad - 1] + ordenado[mitad]) / 2;
    }
  
    return ordenado[mitad];
  }
  
  export function filtrarAtipicos(array: number[], limite: number): number[] {
    if (array.length === 0) {
      return [];
    }
  
    if (limite < 0) {
      throw new Error("El limite debe ser mayor o igual a 0");
    }
  
    const media = calcularMedia(array);
    if (media === null) {
      return [];
    }
  
    // Conserva valores cuya distancia a la media no supera el limite
    return array.filter((valor) => Math.abs(valor - media) <= limite);
  }