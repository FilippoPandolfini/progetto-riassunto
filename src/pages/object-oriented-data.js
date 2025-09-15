export const objectOrientedData = [
    {
        id:"orm",
        title:"Object-Relational Mappin (ORM)",
        content:"Tecnica che permette di mappare gli oggetti di un programma orientato agli oggetti a tabelle di un database relazionale. \nEvita SQL manuale, portabile, gestisce automaticamente le relazioni e opera direttamente sugli oggetti.",
        sample:"Sconsigliato utilizzarlo in Query molto complesse."
    },
    {
        id:"variable",
        title:"Variabili",
        content:"Un'area di memoria che contiene un valore. Tre tipi principali: locali, di istanza, statiche.",
        sample:"· Locali: dichiarate dentro un metodo e accessibili solo lì. \n· Di istanza: dichiarate all'interno di una classe ma fuori dai metodi. Appartengono a un'istanza della classe. \n·Statiche: condivise tra tutte le istanze della classe (dichiarate con static)."
    },
    {
        id: "primtype",
        title: "Tipo primitivo",
        content: "Tipo di dato base. Non è un oggetto. \nRappresenta valori semplici (numeri, caratteri, booleani).",
    },
    {
        id: "objtype",
        title: "Tipo oggetto (reference type)",
        content: "Tipo di dato complesso, che può contenere proprietà e metodi. I valori sono memorizzati come riferimenti (es. Object, Array, Function).",
    },
    {
        id:"arraytype",
        title:"Tipo array",
        content:"Collezione ordinata di elementi, accessibili tramite indice numerico. Può contenere valori di qualsiasi tipo, anche misti."
    },
    {
        id:"functiontype",
        title:"Tipo funzione",
        content:"Blocco di codice riutilizzabile che può essere invocato. È trattato come un valore di prima classe (può essere assegnato a variabili o passato come argomento)."
    },
    {
        id:"nulltype",
        title:"Tipo null",
        content:"Valore primitivo speciale che indica che una variaible è stata dichiarata ma non ha ancora ricevuto un valore."
    },
    {
        id:"symboltype",
        title:"Tipo symbol",
        content:"Valore primitivo unico e immutabile, usato come identificatore per proprietà degli oggetti."
    },
    {
        id:"biginttype",
        title:"Tipo bigint",
        content:"Valore numerico arbitrariamente grande, usato per rappresentare interi più grandi del limite di Number."
    },
    {
        id: "string",
        title: "String",
        content: "Oggetto immutabile che rappresenta una sequenza di caratteri Unicode.\nGestite come oggetti, non come tipi primitivi.\nOgni modifica (concatenazione, sostituzione, ecc.) crea un nuovo oggetto String."
    },
    {
        id:"wrapper",
        title:"Wrapper Classes",
        content:"Classi che \"avvolgono\" i tipi primitivi, permettendo di trattarli come oggetti. \nOgni tipo primitivo ha un corrispondente wrapper nel pacchetto java.lang.",
        sample:"byte → Bye, \nshort → Short, \nint → Integer, \nlong → Long, \nfloat → Float, \ndouble → Double, \nchar → Character, \nboolean → Boolean"
    },
    {
        id:"whywrap",
        title:"Perché usare le Wrapper Classes?",
        content:"Utilizzo con Collezioni: le collezioni (ArrayList, HashMap, ecc), funzionano solo con oggetti. \nPossibilità di Autoboxing e Unboxing. \nLe Wrapper Classes forniscono metodi per conversioni, confronti, parsing. \nPossono essere null, mentre i tipi primitivi no."
    },
    {
        id: "polimorf",
        title: "Polimorfismo",
        content: "Capacità di un oggetto di assumere forme diverse. \n\n· Polimorfismo di compilazione (Overloading). \nStesso nome del metodo,  parametri diversi. \n\n· Polimorfismo di runtime (Overriding). \nUna classe figlia ridefinisce un metodo della classe padre.",
    },
];