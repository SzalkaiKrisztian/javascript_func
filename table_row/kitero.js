/**@type {{name:string}[]} */
const obj ={
}
const szam=3
if(szam >5){
    obj.name='harcsa'
    
}else{
    obj["name"]='kacsa'
}
console.log(obj)
console.log(obj["name"])
console.log(obj.age)
//hf
/**@type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}[]} */
const arr =[
    {//tr1
        nemzet:'Orosz',
        szerzo:'Gogol',
        mu:'A köpönyeg',
        szerzo2:'Csehov',
        mu2:'A csinovnyik halála',
    },
    {//tr3
        nemzet:'Cseh',
        szerzo:'Franz Kafka',
        mu:'Az átváltozás',
    },
    {//tr4
        nemzet:'Magyar',
        szerzo:'Örkény István',
        mu:'Egyperces Novellák',
        szerzo2:'József Attila',
        mu2:'Klárisok',
    },
    {//tr6
        nemzet:'Svájc',
        szerzo:'Friedrich Dürrenmatt',
        mu:'A fizikusok',
    }      
]

const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const trh = document.createElement('tr')
thead.appendChild(trh)

const tomb=["Nemzetiség","Szerző","Mű"]
for(const husi of tomb){
    const th = document.createElement('th')
    th.innerText=husi
    thead.appendChild(th)
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const k of arr){
    
    const trd = document.createElement('tr')
    tbody.appendChild(trd)  
    //NEMZET
    const tdN = document.createElement('td')
    tdN.innerText=k.nemzet
    trd.appendChild(tdN)

    tdN.addEventListener('click',function (e){//interakcio ha kattintasz megjelöli a tdN-t .marked-el
        /**@type {HTMLTableCellElement} */
        const target=e.target//egyik eleme
        target.classList.add('marked')//.marked css

    })

    //SZERZO
    const tdSz = document.createElement('td')
    tdSz.innerText=k.szerzo
    trd.appendChild(tdSz)
    //MŰ
    const tdM = document.createElement('td')
    tdM.innerText=k.mu
    trd.appendChild(tdM)
    //?
    if(k.szerzo2 !== undefined && k.mu2 !== undefined){
        tdN.rowSpan=2

        const tr = document.createElement('tr')
        tbody.appendChild(tr)

        //SZERZO 2
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=k.szerzo2
        tr.appendChild(tdSz2)
        //MŰ 2
        const tdM2 = document.createElement('td')
        tdM2.innerText=k.mu2
        tr.appendChild(tdM2)
    }
}
//hf kommentek
/**@type {HTMLFormElement} */
const htmlform = document.getElementById('htmlform')//form lrtrehoz
addEventListener('submit',function (e){//ha submitolják a gombal akkor hzzáadja a táblához
    e.preventDefault()//nem kell az eredeti
    /**@type {HTMLFormElement} */
    const target =e.target //lerovidites

    /**@type {HTMLInputElement} */
    const nemzetisegelem= target.querySelector('#nemzetiseg')//a lista cimkéire utal
    /**@type {string} */
    const neS=nemzetisegelem.value//string lesz

    /**@type {HTMLInputElement} */
    const szerzoelemelso= target.querySelector('#szerzo1')//a lista cimkéire utal
    /**@type {string} */
    const szeS=szerzoelemelso.value//string lesz

    /**@type {HTMLInputElement} */
    const muelem= target.querySelector('#mu1')//a lista cimkéire utal
    /**@type {string} */
    const meS=muelem.value//string lesz

    /**@type {HTMLInputElement} */
    const szerzoelemmasodik= target.querySelector('#szerzo2')//a lista cimkéire utal
    /**@type {string} */
    const szemS=szerzoelemmasodik.value//string lesz

    /**@type {HTMLInputElement} */
    const muelemmasodik= target.querySelector('#mu2')//a lista cimkéire utal
    /**@type {string} */
    const memS=muelemmasodik.value//string lesz

    //a lista cimkei:
    /**@type {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} */
    const obje ={}//ures de vannak cimkei

    obje.nemzet = neS//egyes cimkekhez hozzarendelem a stringe alakitott targeteket
    obje.szerzo= szeS
    obje.mu =meS
    obje.szerzo2=szemS
    obje.mu2 = memS

    const asd = document.getElementById('alap')
    const trd = document.createElement('tr')
    asd.appendChild(trd)  
    //NEMZET
    const tdN = document.createElement('td')
    tdN.innerText=obje.nemzet
    trd.appendChild(tdN)

    tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        target.classList.add('marked')

    })

    //SZERZO
    const tdSz = document.createElement('td')
    tdSz.innerText=obje.szerzo
    trd.appendChild(tdSz)
    //MŰ
    const tdM = document.createElement('td')
    tdM.innerText=obje.mu
    trd.appendChild(tdM)
    //?
    if(obje.szerzo2 && obje.mu2){
        tdN.rowSpan=2

        const tr = document.createElement('tr')
        asd.appendChild(tr)

        //SZERZO 2
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=obje.szerzo2
        tr.appendChild(tdSz2)
        //MŰ 2
        const tdM2 = document.createElement('td')
        tdM2.innerText=obje.mu2
        tr.appendChild(tdM2)
    }

})
