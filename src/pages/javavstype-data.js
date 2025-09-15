export const javavstypeData = [
    {
        id: "js",
        title: "JavaScript (JS)",
        content: "Linguaggio di programmazione interpretato, dinamico e debolmente tipizzato. \nI tipi delle variabili sono dichiarati a runtime. \nSupporta la programmazione funzionale e orientata agli oggetti. \nAmpiamente usato per frontend (browser) e backend (Node.js)."
    },
    {
        id: "ts",
        title: "TypeScript (TS)",
        content: "Supreset di JavaScript: tutto il JS è valido TS. \nAggiunge tipizzazione statica: i tipi delle variabili vengono controllati a compile-time. \nSupporta interfacce, enum, generics e classi avanzate. \nMigliora la manutenzione di progetti grandi grazie ai tipi e agli strumenti IDE. \nRichiede compilazione in JS pirma di essere eseguito nel browser o Node.js."
    },
    {
        id: "jsx",
        title: "JSX",
        content: "Sintassi di estensione per JavaScript usata in React. \nPermette di scrivere HTML-like dentro il JS. \nNon ha tipi: tutto è JavaScript standard: gli errori di tipo si scoprono solo a runtime.",
        sample: "File tipico: .jsx"
    },
    {
        id: "tsx",
        title: "TSX",
        content: "Sintassi di estensione per TypeScript + React. \nCome JSX ma con tipi statici. Possibile definire tipi per props, state, ecc. \nMigliora la sicurezza e l'autocomplete negli editor.",
        sample: "File tipico: .tsx"
    }
]