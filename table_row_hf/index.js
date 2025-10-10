/**@type {{war:string,team1:string,team1Size:string,team2?:string,team2Size?:string}[]} */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]
//tábla
const table=document.createElement('table')
document.body.appendChild(table)
//thead hozzaadasa
const thead=document.createElement('thead')
table.appendChild(thead)
//tr hozzaadasa
const tr = document.createElement('tr')
thead.appendChild(tr)

const t=["Harc megnevezése","Szembenálló felek","Haderő"]
for(const seged of t){
    const th = document.createElement('th')
    th.innerText=seged
    tr.appendChild(th)
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const bum of arr){
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    //war
    const td1 = document.createElement('td')
    td1.innerText=bum.war
    tr1.appendChild(td1)

    //team1
    const td2 = document.createElement('td')
    td2.innerText=bum.team1
    tr1.appendChild(td2)

    //tem1Size
    const td3 = document.createElement('td')
    td3.innerText=bum.team1Size
    tr1.appendChild(td3)

    //tem2, tem2Size
    if(bum.team2!==undefined && bum.team2Size!==undefined){
        td1.rowSpan=2 //kibőviti az elsőt a wart ha van több

        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2) //egy új sorba fűzzük az új információt, mivwl bővitjük a war 2-re

        const td4 = document.createElement('td')
        td4.innerText=bum.team2
        tr2.appendChild(td4)

        const td5 = document.createElement('td')
        td5.innerText=bum.team2Size
        tr2.appendChild(td5)
    }
}