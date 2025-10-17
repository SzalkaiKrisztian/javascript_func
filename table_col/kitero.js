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

const th1 =document.createElement('th')//1. oszlop headerje
th1.innerText="Szerző Neve"
tr.appendChild(th1)

const th2 = document.createElement('th')//2. -||-
th2.innerText="Korszak"
tr.appendChild(th2)

const th3 = document.createElement('th') //3. -||-
th3.innerText="Szerelmek"
tr.appendChild(th3)
th3.colSpan="2" // 2.tölt ki

const tbody = document.createElement('tbody')
table.appendChild(tbody)
for(const hf of arr){
    const tr1 = document.createElement('tr') //tr
    tbody.appendChild(tr1)

    const td1 = document.createElement('td')//szerzo neve
    td1.innerText=hf.neve
    tr1.appendChild(td1)

    const td2 = document.createElement('td')//korszaka
    td2.innerText=hf.kor
    tr1.appendChild(td2)

    const td3=document.createElement('td')//1. szerelme
    td3.innerText=hf.szerelme1
    tr1.appendChild(td3)

    if(hf.szerelme2 === undefined){//van-e
        td3.colSpan= 2//ha nincs kitölti
    }else{
        const td4=document.createElement('td')
        td4.innerText=hf.szerelme2
        tr1.appendChild(td4)
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
 * @returns {void}
 */
function createCell(cellType, cellcContent, parentRow){
        const valami=document.createElement(cellType)
        valami.innerText=cellcContent
        parentRow.appendChild(valami)
}