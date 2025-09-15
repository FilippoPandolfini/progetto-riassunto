export const javaData = [
    {
        id: "compvsint",
        title: "Compilato vs Interpretato",
        content: "La differenza principale tra un linguaggio di programmazione compilato e uno interpretato sta nel modo in cui il codice sorgente viene eseguito dal computer."
    },
    {
        id: "comp",
        title: "Linguaggio Compilato",
        content: "· Il codice sorgente tradotto interamente in un file eseguibile (codice macchina) da un compilatore prima dell'esecuzione. \n· Una volta compilato, il programma può essere eseguito direttamente senza bisogno del codice sorgente o di un interprete. \n·Maggiore velocità di esecuzione, ma richiedendo una fase di compilazione lo sviluppo può essere più lento e meno flessibile.",
        sample: "Es: \nC, C++, Rust, Go."
    },
    {
        id: "int",
        title: "Linguaggio Interpretato",
        content:"· Il codice sorgente viene eseguito riga per riga da un interprete, senza compilazione preventiva. \n· Il programma viene eseguito direttamente dall'interprete. \n· Maggiore flessibilità, più facilità di debug e velocità di sviluppo, ma più lento perché ogni riga deve essere tradotta durante l'esecuzione.",
        sample:"Es: \nPython, JavaScript, PHP, Ruby."
    },
    {
        id:"hybrid",
        title:"Ibridi",
        content:"Linguaggi che combinano entrambi gli approcci.",
        sample:"Es: \n·Java e C#, che vengono prima compilati in un bytecode e poi eseguiti da una macchina virtuale."
    }
]