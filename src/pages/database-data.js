export const databaseData = [
    {
        id: "sql",
        title: "SQL",
        content: "Stuctured Query Language. \nLinguaggio per comunicare con i database relazionali."
    },
    {
        id: "datarelation",
        title: "Rapporti tra dati in un database",
        content: "· 1:1 (Uno a Uno) \n· 1:N (Uno a Molti) \n·N:M (Molti a Molti)"
    },
    {
        id: "keys",
        title: "Chiavi",
        content: "· Primary Key (PK): identifica univocamente un record. \n·Foreign Key (FK): collega un record di una tabella alla PK di un'altra tabella."
    },
    {
        id: "ddl",
        title: "DDL",
        content: "Data Definition Language. \nComandi SQL per definire la struttura del database.",
        sample: "Es: CREATE, ALTER, DROP."
    },
    {
        id: "dml",
        title: "DML",
        content: "Data Manipulation Language. \nComandi SQL per gestire i dati.",
        sample: "Es: INSERT, UPDATE, DELETE, SELECT."
    },
    {
        id: "dcl",
        title: "DCL",
        content: "Data Control Language. \nComandi per permessi e sicurezza.",
        sample: "Es: GRANT, REVOKE."
    },
    {
        id: "tcl",
        title: "TCL",
        content: "Transaction Control Language. \nComandi per transazioni.",
        sample: "Es: COMMIT, ROLLBACK, SAVEPOINT."
    },
    {
        id: "constraints",
        title: "Vincoli (constraints)",
        content:"·NOT NULL: il campo non può essere vuoto. \n·UNIQUE: valori univoci. \n·CHECK: condizione che deve essere rispettata. \n·DEFAULT: valore predefinito se non specificato."
    },
    {
        id: "index",
        title:"Indice (index)",
        content:"Struttura che velocizza le query, ma può rallentare gli inserimenti/aggiornamenti."
    },
    {
        id:"normalization",
        title:"Normalizzazione",
        content:"Processo per organizzare i dati, riducendo ridondanza e inconsistenza.",
        sample:"Forme normali: 1NF, 2NF, 3NF, BCNF."
    },
    {
        id:"denormalization",
        title:"Denormalizzazione",
        content:"Scelta di duplicare i dati per migliorare le prestazioni in alcuni scenari."
    },
    {
        id:"view",
        title:"View (vista)",
        content:"Query salvata che si comporta come una tabella virtuale."
    },
    {
        id:"storedprocedure",
        title:"Stored Procedure & Trigger",
        content:"Blocchi di codice SQL salvati nel DB per automatizzare operazioni o reagire a eventi."
    },
    {
        id:"transaction",
        title:"Transazione",
        content:"Insieme di operazioni SQL che devono essere eseguite tutte o nessuna.",
        sample:"ACID: Atomicità, Consistenza, Isolamento, Durabilità"
    },
    {
        id:"join",
        title:"JOIN",
        content:"Combinazione di dati da più tabelle.",
        sample:"·INNER JOIN: solo corrispondenze. \n·LEFT/RIGHT JOIN: include anche record non corrispondenti da una tabella. \n·FULL OUTER JOIN: tutti i record da entrambe le tabelle."
    }
]