/**
 * @typedef {{nemzet:string,szerzo:string,mu:string,szerzo2?:string,mu2?:string}} TablaArryTipus
 * @typedef {{txt:string,tag:string}} FormArryTipus
 */
//----------------------------Table------------------------------------->
/**
 * @param {"td"|"th"} cellType
 * @param {string} cellContent
 * @param {HTMLTableRowElement} parentTr
 * @returns {HTMLTableCellElement}
 */
function createTableCell(cellType,cellContent,parentTr){
    const tdvh = document.createElement(cellType)
    tdvh.innerText=cellContent
    parentTr.appendChild(tdvh)
    return tdvh
}
/**
 * @param {HTMLTableSectionElement} bodyAmihezFuz
 * @param {TableArryTipus} egyObjeltumAdatai
 */
function createTableRow(bodyAmihezFuz,egyObjeltumAdatai){
    const bodyTr = document.createElement('tr')
    bodyAmihezFuz.appendChild(bodyTr)

    const tdNemzet = createTableCell("td",egyObjeltumAdatai.nemzet,bodyTr)

    tdNemzet.addEventListener('click',function(e){
        /**@type {HTMLTableCellElement} */
        const target = e.target
        const tdTrTbody = target.parentElement.parentElement
        const findMarked = tdTrTbody.querySelector('.marked')
        if(findMarked != null){
            findMarked.classList.remove('marked')
        }
        target.classList.add('marked')
    })

    createTableCell("td",egyObjeltumAdatai.szerzo,bodyTr)
    createTableCell("td",egyObjeltumAdatai.mu,bodyTr)
    
    if(egyObjeltumAdatai.szerzo2 && egyObjeltumAdatai.mu2){
        tdNemzet.rowSpan=2
        const bodyTrFuzTr =document.createElement('tr')
        bodyAmihezFuz.appendChild(bodyTrFuzTr)

        createTableCell("td",egyObjeltumAdatai.szerzo2,bodyTrFuzTr)
        createTableCell("td",egyObjeltumAdatai.mu2,bodyTrFuzTr)
    }
}
/**
 * 
 * @param {HTMLTableElement} tableAmihezFuz 
 * @param {string[]} fejLec 
 */
function createTableHeader(tableAmihezFuz,fejLec){
    const thead = document.createElement('thead')
    tableAmihezFuz.appendChild(thead)

    const theadTr = document.createElement('tr')
    thead.appendChild(theadTr)

    for(const elem of fejLec){
    createTableCell("th",elem,theadTr)
}
}
/**
 * 
 * @param {string} tbodyId 
 * @param {TablaArryTipus[]} tombArry
 * @param {HTMLTableElement} tableAmihezFuz
 */
function createTableBody(tbodyId,tombArry,tableAmihezFuz){
    const tbody = document.createElement('tbody')
    tbody.id=tbodyId
    tableAmihezFuz.appendChild(tbody)

    for(const cim of tombArry){
        createTableRow(tableAmihezFuz,cim)
    }
}
/**
 * 
 * @param {string} bodyId 
 * @param {string[]} fejLec
 * @param {TablaArryTipus[]} tombArry
 */
function createTable(bodyId,fejLec,tombArry){
    const table = document.createElement('table')
    document.body.appendChild(table)

    createTableHeader(table,fejLec)

    createTableBody(bodyId,tombArry,table)
}
//----------------------------Form-------------------------------------->
/**
 * 
 * @param {HTMLDivElement} parentDiv 
 */
function bR(parentDiv){
    const br = document.createElement('br')
    parentDiv.appendChild(br)
}
/**
 * 
 * @param {HTMLFormElement} parentForm 
 * @param {string} forIdNameTag 
 * @param {string} labContent 
 */
function createFormDivElement(parentForm,forIdNameTag,labContent){
    const div = document.createElement('div')
    parentForm.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor=forIdNameTag
    label.innerText=labContent
    div.appendChild(label)
    bR(div)
    const input = document.createElement('input')
    input.type="text"
    input.id=forIdNameTag
    input.forIdNameTag
    div.appendChild(input)
    bR(div)
    const span = document.createElement('span')
    span.classList.add('error')
    div.appendChild(span)
    bR(div)
}
/**
 * 
 * @param {string} id 
 * @param {FormArryTipus[]} txtTag 
 * @returns {HTMLFormElement}
 */
function createForm(id,txtTag){
    const jsform = document.createElement('form')
    jsform.id=id
    document.body.appendChild(jsform)

    for(const cim of txtTag){
        createFormDivElement(jsform,cim.tag,cim.txt)
    }

    const jsButton = document.createElement('button')
    jsButton.innerText="Hozzáadás"
    jsform.appendChild(jsButton)
    return jsform
}
