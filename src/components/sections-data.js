import { dataStructuresData } from "../pages/data-structures-data";
import { lambdaData } from "../pages/lambda-data";
import { multithreadingData } from "../pages/multithreading-data";
import { objectOrientedData } from "../pages/object-oriented-data";
import { reactData } from "../pages/react-data";

export const sectionsData = [
  {
    id: "datastructure",
    title: "Strutture dati e collezioni",
    content: "Array, Array List, String, Generics.",
    subPanels: dataStructuresData,
  },
  {
    id: "objoriented",
    title: "Programmazione orientata agli oggetti",
    content: "Polimorfismo, Tipo Primitivo, Tipo Oggetto, Tipo Array, Tipo Funzione, Tipo Null, Tipo Symbol, Tipo Bigint.",
    subPanels: objectOrientedData,
  },
  {
    id: "lambda",
    title: "Programmazione funzionale e lambda",
    content: "Lambda, Method reference.",
    subPanels: lambdaData,
  },
{
    id: "multithreading",
    title: "Programmazione concorrente e multithreading",
    content: "Thread, Single-thread, Multithreading, Stream, Parallel Stream.",
    subPanels: multithreadingData,
  },
  {
    id: "react",
    title: "React e Web Development",
    content: "Hook.",
    subPanels: reactData
  },
  {
    id: "database",
    title: "Database e SQL",
    content: "SQL, Rapporti tra dati in un database, Chiavi.",
  },
  {
    id: "networking",
    title: "Sicurezza e rete",
    content: "SSH.",
  },
  {
    id: "metadati",
    title: "Metadati e documentazione",
    content: "Annotazioni, API.",
  }
];
