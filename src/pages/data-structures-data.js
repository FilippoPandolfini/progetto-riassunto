export const dataStructuresData = [
    {
        id: "array",
        title: "Array",
        content: "Struttura dati che memorizza più valori dello stesso tipo.\nLista ordinale, dimensione fissa, accessibile tramite indice.\nPuò contenere tipi primitivi.",
    },
    {
        id: "arraylist",
        title: "Array List",
        content: "Classe Java che implementa una lista dinamica.\nPuò crescere o ridursi in base agli inserimenti o rimozioni.\nContiene solo oggetti.\nI tipi primitivi vengono incapsulati in wrapper.",
        sample:"Es: \nArrayList<String> \nDispone di metodi come add(), get(), set(), remove(), size()."
    },
    {
        id:"iterator",
        title:"Iterator",
        content:"Per scorrere una Array List. \nRispetto ad un for loop, si può usare il metodo remove() in modo sicuro senza incorrere in un ConcurrentModificationException o in errori di salto di elementi. \nL'Iterato è generico e può essere usato su diverse collezioni."
    },
    {
        id:"overloaded",
        title:"Overloaded Methods",
        content:"Tecnica che permette di definire più metodi con lo stesso nome, ma parametri diversi all'interno della stessa classe.",
        sample:"Metodo considerabile \"overloaded\" se rispetta almeno una delle seguenti condizioni: \n· Numero diverso di prametri. \n· Tipo diverso di paramatri. \n· Ordine diverso di parametri. \nNon può dipendere solo sul tipo di ritorno."
    },
    {
        id:"inheritance",
        title:"Inheritance (ereditarietà)",
        content:"Meccanismo che consente a una classe di acquisire le proprietà e i metodi di un'altra classe.",
        sample:"Usa la parola chiave \"extends\"."
    },
    {
        id:"inheritancetype",
        title:"Tipologie di erediterietà",
        content:"·Semplice: una classe eredita da un'altra. \n· Multilevel: una classe eredita da una classe che a sua volta eredita da un'altra. \n· Gerarchica: più classi ereditano dalla stessa classe base.",
        sample:"Java non supporta l'ereditarietà multipla tra classi per evitare problemi di ambiguità, ma si può ottenere un comportamento simile tramite interfacce."
    },
    {
        id:"accmod",
        title:"Modificatori di accesso e ereditarietà",
        content:"·Private: non accessibile dalle sottoclassi. \n·Protected: accessibile dalle sottoclassi (anche in pacchetti diversi). \n· Public: accessibile ovunque. \n·Default (senza modificatore): accessibile solo nello stesso pacchetto.",
        sample:"I costruttori non sono ereditati, ma la sottoclase può chiamare il costruttore della superclasse con super()."
    },
    {
        id:"super",
        title:"Super",
        content:"Parola chiave usata per riferirsi ai membri della superclasse."
    },
    {
        id:"incaps",
        title:"Incapsulamento",
        content:"Nascondere i dettagli interni di una classe ed esporre solo ciò che è necessario, ricorrendo a: \n· Variabili di istanza private (impedire l'accesso diretto). \n· Metodi getter e setter (controllare lettura e modifica dati). \n· Modificatori di accesso (private, public, protected)."
    },
    {
        id:"getandset",
        title:"Getter e Setter",
        content:"Permettono di accedere e modificare le variabili private: \n· Getter: restituisce il valore della variabile. \n· Setter: imposta un nuovo valore alla variabile."
    },
    {
        id:"copyconstr",
        title:"Costruttore di copia",
        content:"Costruttore speciale che prende in input un'istanza della stessa classe e copia i valori dei suoi attributi, creando un nuovo oggetto indipendente.",
        sample:"Es: \nclass Persona: \nPersona persona1 = new Persona(\"Mario\"); \nPersona persona2 = new Persona(\"persona1\"); \npersona2.setName(\"Luigi\");"
    },
    {
        id:"interface",
        title:"Interfacce",
        content:"Tipo speciale che definisce un contratto che le classi devono rispettare. \nContiene solo dichiarazioni di metodi e costanti."
    },
    {
        id: "generics",
        title: "Generics",
        content: "Meccanismo che permette di definire classi, interfacce o metodi senza specificare in anticipo il tipo.\nConsente di scrivere codice riutilizzabile e sicuro.\nAumenta la sicurezza a tempo di compilazione (type safety).\nEvita la necessità di cast espliciti.\nEsempio: List<String> memorizza solo stringe, evitando errori di tipo.",
    }
];