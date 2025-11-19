/**@type {TablaArryTipus[]} */
const arrTable=[
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
createTable("jsTable",["Nemzetiség","Szerző","Mű"],arrTable)

/**@type {FormArryTipus[]} */
const arrForm=[
    {
        txt:"Nemzetiseg:",
        tag:"nemzetiseg"
    },
    {
        txt:"Szerző:",
        tag:"szerzo1"
    },
    {
        txt:"Mű:",
        tag:"mu1"
    },
    {
        txt:"Másik Szerző:",
        tag:"szerzo2"
    },
    {
        txt:"Mű:",
        tag:"mu2"
    },
]
const jsForm =createForm("jsForm",arrForm)

