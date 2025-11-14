/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} CountryWriters 
 * @typedef {{label:string,input:string}} LabInpAdat
 */
/**@param {HTMLElement} */
function bR(parent){
    const br = document.createElement('br')
    parent.appendChild(br)
}
/** 
 * @param {HTMLFormElement} form
 * @param {string} id
 * @param {string} labelszov
*/
function createFormElement(form, labelszov, id){
    const div = document.createElement('div')
    form.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor=id
    label.innerText=labelszov
    div.appendChild(label)
    bR(div)

    const input = document.createElement('input')
    input.type="text"
    input.id=id
    input.name=id
    div.appendChild(input)

    bR(div)
    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    bR(div)
}

//--------------------------------------------------------------------------
/** 
 * @param {"td"|"th"} celltype
 * @param {string}  content
 * @param {HTMLTableRowElement} oselement
*/
function createTabeCell(celltype,content,oselement){
    const belso = document.createElement(celltype)
    belso.innerText=content
    oselement.appendChild(belso)
    return belso
}

/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tablebody,writerRow){
        const trd = document.createElement('tr')
        tablebody.appendChild(trd)  
        //NEMZET
        tdN= createTabeCell("td",writerRow.nemzet,trd)

        tdN.addEventListener('click',function (e){
        /**@type {HTMLTableCellElement} */
        const target=e.target
        target.classList.add('marked')
        const os =target.parentElement.parentElement
        const oS =os.querySelector('marked')
        if(oS){
            oS.classList.remove('marked')
        }
        })

        //SZERZO
        createTabeCell("td",writerRow.szerzo,trd)
        //MŰ
        createTabeCell("td",writerRow.mu,trd)
        //? van-e
        if(writerRow.szerzo2 && writerRow.mu2 ){
            tdN.rowSpan=2

            const tr = document.createElement('tr')
            tablebody.appendChild(tr)

            //SZERZO 2
            createTabeCell("td",writerRow.szerzo2,tr)
            //MŰ 2
            createTabeCell("td",writerRow.mu2,tr)
        }
}

/**
 * @param {CountryWriters[]} gyujtemeny
*/
function renderTableBody(gyujtemeny){
    const tbodykepviselo = document.getElementById('teremtett')
    tbodykepviselo.innerHTML=''

    for(const k of gyujtemeny){

        renderTableRow(tbodykepviselo,k)
    }
}

/**
 * @param {HTMLTableElement} parentbody
 * @param {string[]} headerlist
 */
function generetHeader(parentbody,headerlist){

    const thead = document.createElement('thead')
    parentbody.appendChild(thead)

    const trHead = document.createElement("tr")
    thead.appendChild(trHead)

    for(const husi of headerlist){
        createTabeCell("th",husi,trHead)
    }
}

//---------------------------------------------------------------------------
function addToHtmlTable(e){//ha submitolják a gombal akkor hzzáadja a táblához
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
        obje.szerzo2=szemS
        obje.mu2 = memS

        //----------------------------------------------------------------------------------
        const alap = document.getElementById('alap')//html tabla idje
        renderTableRow(alap,obje)
    }
}

/**
 * @param {HTMLInputElement} inputElement1
 * @param {HTMLInputElement} inputElement2
 * @param {HTMLInputElement} inputElement3
 * @returns {boolean}
 */
function validateFields(inputElement1,inputElement2,inputElement3){
    let valid = true
    valid = validateField(inputElement1,"kötelező")
    valid = validateField(inputElement2,"kötelező")
    valid = validateField(inputElement3,"kötelező")
    return valid
}

/**
 * @param {string} id
 * @param {string[]} nevtomb
 */
function compactFormRenderer(id,nevtomb){
    const jsForm = document.createElement('form')
    jsForm.id=id
    document.body.appendChild(jsForm)

    for(const fasirt of nevtomb){
        createFormElement(jsForm,fasirt.label,fasirt.input)
    }
    
    const buttonA = document.createElement('button')
    buttonA.innerText='Hozzáadás'
    jsForm.appendChild(buttonA)
    return jsForm
}

/**
 * @param {string} tbodyId
 * @param {string[]} fejleclist
 */
function generateTable(tbodyId,fejleclist){

    //table letrahozasa
    const table = document.createElement('table')
    document.body.appendChild(table)
    //thead
    generetHeader(table,fejleclist)

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    tbody.id=tbodyId
}

/**
 * @param {} htmlImputField
 * @param {string} hibaUzenet
 */
function validateField(htmlImputField,hibaUzenet){
    let valid =true
    if(htmlImputField.value==''){
        const felmeno3 = htmlImputField.parentElement
        const felM=felmeno3.querySelector('.error')
        felM.innerText=hibaUzenet
        valid=false
    }
    return valid
}