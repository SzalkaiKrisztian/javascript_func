/**@type {{neve:string,kor:string,szerelme1:string,szerelme2?:string}[]} */
const arr =[
    {//elso tr
        neve: 'Balassi Bálint',
        kor: 'reformáció',
        szerelme1: 'Losonczy Anna',
        szerelme2: 'Dobó Krisztina'
    },{//masodik tr
        neve: 'Csokonai Vitéz Mihály',
        kor: 'felvilágosodás',
        szerelme1: 'Vajda Juliána'
    },{//harmadik tr
        neve: 'Petőfi Sándor',
        kor: 'magyar romantika',
        szerelme1: 'Mednyánszky Berta',
        szerelme2: 'Szendrey Júlia'
    },{//4. tr
        neve: 'Ady Endre',
        kor: '20. század',
        szerelme1: 'Léda',
        szerelme2: 'Csinszka'
   }
] //tomb
/** 
 *@type{string}
*/
const bumm = "3, 2, 1, bumm ..."
console.log(bumm)
const b=["egy","kettő","három"]
for(let i=0;i<b.length;i++){
    console.log(b[i])
}
console.log(b[1])
//while(){}
//do {
    
//} while ();
for(const a of b){
    console.log(a)
}
for(const key in b){
    console.log(`${key}: ${b[key]}`)
}
/**@type {{name:string,age:number}} */
const objektum={
    name : "krisztian",
    age : 17
}
for(const key in objektum){
    console.log(objektum[key])
}
//hf:
const table =document.createElement('table')//tablat rakok
document.body.appendChild(table)

const thead = document.createElement('thead')//theadet rakok
table.appendChild(thead)

const tr =document.createElement('tr')
thead.appendChild(tr)

createCell("th","Szerző neve",tr)
createCell("th","Korszak",tr)
const th3 = createCell("th","Szerelmek",tr)
th3.colSpan=2

const tbody = document.createElement('tbody')
table.appendChild(tbody)
for(const hf of arr){
    const tr1 = document.createElement('tr') //tr
    tbody.appendChild(tr1)

    createCell("td",hf.neve,tr1)//szerzo neve
    createCell("td",hf.kor,tr1)//korszaka
    const td3 = createCell("td",hf.szerelme1,tr1)//1. szerelme
    if(hf.szerelme2 === undefined){//van-e
        td3.colSpan= 2//ha nincs kitölti
    }else{
        createCell("td",hf.szerelme2,tr1)
    }
}
/**szakneve:                                js doc                            ----
 * 
 * letrehoz egy cellat adattal
 * 
 * @param {string} cellType  //td th
 * @param {string} cellcContent 
 * @param {HTMLTableRowElement} parentRow 
 * 
 * @returns {HTMLTableCellElement} vésszatérünk a létrehozott cella elemmel
 */
function createCell(cellType, cellcContent, parentRow){
        const valami=document.createElement(cellType)
        valami.innerText=cellcContent
        parentRow.appendChild(valami)
        return valami
}