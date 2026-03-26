import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

type Dataset = {
  nombre: string;
  datos: number[];
  limite: number;
};

const datasets: Dataset[] = [
  { nombre: "Normal", datos: [10, 12, 14, 16, 18], limite: 6 },
  { nombre: "Con outlier", datos: [10, 11, 12, 13, 100], limite: 20 },
  { nombre: "Vacio", datos: [], limite: 5 },
  { nombre: "Repetidos", datos: [5, 5, 5, 5, 5], limite: 0 }
];

for (const { nombre, datos, limite } of datasets) {
  console.log(`\n--- Dataset: ${nombre} ---`);
  console.log("Datos originales:", datos);

  const media = calcularMedia(datos);
  const mediana = calcularMediana(datos);
  const filtrados = filtrarAtipicos(datos, limite);
  const mediaFiltrada = calcularMedia(filtrados);
  const medianaFiltrada = calcularMediana(filtrados);

  console.log("Media:", media);
  console.log("Mediana:", mediana);
  console.log(`Filtrados (limite = ${limite}):`, filtrados);
  console.log("Media filtrada:", mediaFiltrada);
  console.log("Mediana filtrada:", medianaFiltrada);
}