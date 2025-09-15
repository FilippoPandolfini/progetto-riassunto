import { dataStructuresData } from "../pages/data-structures-data";
import { databaseData } from "../pages/database-data";
import { lambdaData } from "../pages/lambda-data";
import { metadataData } from "../pages/metadata-data";
import { multithreadingData } from "../pages/multithreading-data";
import { networkingData } from "../pages/networking-data";
import { objectOrientedData } from "../pages/object-oriented-data";
import { reactData } from "../pages/react-data";
import { javavstypeData } from "../pages/javavstype-data";

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
    content: "Thread, Single-thread, Multithreading, Stream, Parallel Stream, Concorrenza, Sincronizzazione, Deadlock.",
    subPanels: multithreadingData,
  },
  {
    id: "react",
    title: "React e Web Development",
    content: "React, Hook, DOM, Componenti Funzionali, JSX, Props, State, Effect, Ref.",
    subPanels: reactData
  },
  {
    id: "javavstype",
    title: "JavaScript vs TypeScript",
    content: "Javascript, TypeScript, JSX e TSX.",
    subPanels: javavstypeData
  },
  {
    id: "database",
    title: "Database e SQL",
    content: "SQL, Rapporti tra dati in un database, Chiavi, DDL, DML, DCL, TCL, Constraints, Index, Normalizzazione, Denormalizzazione, View, Stored Procedure & Trigger, Transazione, JOIN.",
    subPanels: databaseData
  },
  {
    id: "networking",
    title: "Sicurezza e rete",
    content: "SSH, HTTPS, TLS/SSL, VPN, Firewall, Proxy, 2FA, Hashing, Crittografia simmetrica e asimmetrica, Port, DNS, Attacchi comuni.",
    subPanels: networkingData
  },
  {
    id: "metadati",
    title: "API, metadati e documentazione",
    content: "API, REST API, Javadoc, Annotazioni, Commenti, Metadata, OpenAPI, Versioning.",
    subPanels: metadataData
  }
];
