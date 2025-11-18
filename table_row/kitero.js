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
//------------------------------------------------------------------



//Tablazat



//hf
/**@type {CountryWriters[]} */
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
generateTable("teremtett",["Nemzetiseg","Szerzo","Mű"])

renderTableBody(arr)

/**
 * @type {LabInpAdat[]}
 */
const formArr=[
    {
        label: "Nemzetiség:",
        input: "nemzetiseg",
    },{
        label: "Szerző:",
        input: "szerzo1",
    },{
        label: "Mű:",
        input: "mu1",
    },{
        label: "Másik Szerző:",
        input: "szerzo2",
    },{
        label: "Mű:",
        input: "mu2",
    },
]

/**@type {HTMLFormElement} */
const htmlform = document.getElementById('htmlform')//form lrtrehoz

/**@type {HTMLFormElement} */
const jsForm = compactFormRenderer("jsform",formArr)

htmlform.addEventListener('submit',addToHtmlTable)

jsForm.addEventListener('submit',function(e){//ha submitolják a gombal akkor hzzáadja a táblához
    e.preventDefault()//nem kell az eredeti

    /**@type {CountryWriters} */
    const obje ={}//ures de vannak cimkei

    /**@type {HTMLFormElement} */
    const target =e.target //lerovidites
    
    //----------------------------------------------------------------------------------
    /**@type {HTMLInputElement} */
    const nemzetisegelem= target.querySelector('#nemzetiseg')
    /**@type {HTMLInputElement} */
    const szerzoelemelso= target.querySelector('#szerzo1')
    /**@type {HTMLInputElement} */
    const muelem= target.querySelector('#mu1')
    /**@type {HTMLInputElement} */
    const szerzoelemmasodik= target.querySelector('#szerzo2')
    /**@type {HTMLInputElement} */
    const muelemmasodik= target.querySelector('#mu2')
    
    //----------------------------------------------------------------------------------
    
    if(validateFields(nemzetisegelem,szerzoelemelso,muelem)){
        //----------------------------------------------------------------------------------
        /**@type {string} */
        const neS=nemzetisegelem.value//string lesz
        /**@type {string} */
        const szeS=szerzoelemelso.value//string lesz
        /**@type {string} */
        const meS=muelem.value//string lesz
        /**@type {string} */
        const szemS=szerzoelemmasodik.value//string lesz
        /**@type {string} */
        const memS=muelemmasodik.value//string lesz

        //----------------------------------------------------------------------------------
        obje.nemzet = neS//egyes cimkekhez hozzarendelem a stringe alakitott targeteket
        obje.szerzo= szeS
        obje.mu =meS
        szemS=='' ? obje.szerzo2=undefined : obje.szerzo2=szemS
        memS =='' ? obje.mu2=undefined :obje.mu2=memS

        //----------------------------------------------------------------------------------
        arr.push(obje)
        console.log(arr)
        renderTableBody(arr)
        
    }

    
})
