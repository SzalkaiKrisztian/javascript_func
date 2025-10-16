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
/**@type {{nemzet:string,szerzo:string,mu:string,szerzo?:string,mu2?:string}[]} */
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

const th1 = document.createElement('th')
th1.innerText="Nemzetiség"
trh.appendChild(th1)

const th2 = document.createElement('th')
th2.innerText="Szerző"
trh.appendChild(th2)

const th3 = document.createElement('th')
th3.innerText="Mű"
trh.appendChild(th3)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const k of arr){
    const trd = document.createElement('tr')
    tbody.appendChild(trd)  
    //NEMZET
    const tdN = document.createElement('td')
    tdN.innerText=k.nemzet
    trd.appendChild(tdN)
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

        //SZERZO
        const tdSz2 = document.createElement('td')
        tdSz2.innerText=k.szerzo2
        tr.appendChild(tdSz2)
        //MŰ
        const tdM2 = document.createElement('td')
        tdM2.innerText=k.mu2
        tr.appendChild(tdM2)
    }
}
