/**@type {TablaArryTipus[]} */
const arrJs=[
    {
        nemzet: "Orosz",
        szerzo: "Gogol",
        mu: "Köpönyeg",
        szerzo2: "Csehov",
        mu2: "Csinovnyik halála"
    },{
        nemzet: "Cseh",
        szerzo: "Franz Kafka",
        mu: "az Átváltozás"
    },{
        nemzet: "Magyar",
        szerzo: "Örmény István",
        mu: "egyperces Novellák",
        szerzo2: "Jozsef Attila",
        mu2: "Klárisok"
    },{
        nemzet: "Svájc",
        szerzo: "Frederich Dörrenmatt",
        mu: "A fizikusok"
    }
]

createTable("jsTable",["Nemzetiség","Szerző","Mű"],arrJs)

