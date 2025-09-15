export const multithreadingData = [
    {
        id: "thread",
        title: "Thread",
        content: "La più piccola unità di eecuzione indipendente gestita dal sistema operativo. \nPermette di eseguire compiti simultaneamente senza bloccare l'intera applicazione.",
    },
    {
        id: "singlethread",
        title: "Single-thread",
        content: "Modalità in cui tutte le operazioni vengono eseguite su un unico thread, di solito il thread principale dell'applicazione. \n\n· Tutti i task vengono eseguiti in sequenza, uno alla volta. \n· Nessuna concorrenza, semplice da programmare ma può portare a blocchi dell'interfaccia utente se le operazioni sono lunghe. \n· Tipico nei programmi sincroni o nei primi approcci a Java prima dell'introduzione del multithreading."
    },
    {
        id:"multithreading",
        title:"Multithreading",
        content:"Capacità di un programma di eseguire più thread contemporaneamente, sfruttando i core della CPU. \n\n·Migliora le prestazioni per operazioni che possono essere eseguite in parallelo. \n· Richiede attenzione alla sincronizzazione per evitare problemi di accesso concorrente alla memoria condivisa."
    },
    {
        id:"stream",
        title:"Stream",
        content:"Un flusso di dati su cui è possibile applicare operazioni di trasformazione, filtraggio e aggregazione. \n\n· Non memorizza dati. \n· Consente uno stile di programmazione dichiarativo (tipo SQL) sulle collezioni di dati. \nEs: list.stream().filter(x -> x > 10).map(x -> x * 2)"
    },
    {
        id:"parallelstream",
        title:"Parallel Stream",
        content:"Variante di Stream che suddivide automaticamente i dati su più thread, eseguendo operazioni in parallelo. \n\n· Può accelerare l'elaborazione su grandi collezioni, sfruttando più core della CPU. \n· Non garantisce l'ordine degli elementi a meno di usare metodi specifici come forEachOrdered. \n· Attenzione alla sincronizzazione se le operazioni hanno effetti collaterali."
    },
    {
        id:"concurrency",
        title:"Concorrenza",
        content:"Capacità di un programma di gestire più attività apparentemente simultanee, anche su un singolo core."
    },
    {
        id:"sinchronization",
        title:"Sincronizzazione",
        content:"Meccanismo per controllare l'accesso ai dati condivisi da più thread, evitando race condition."
    },
    {
        id:"deadlock",
        title:"Deadlock",
        content:"Situazione in cui due o più thread rimangono bloccati indefinitamente, ciascuno in attesa che l'altro rilasci una risorsa."
    }
]