/**@type {{theme: string, time:string, scientist1:string, scientist2?:string}[]} */
const arr = [ //ez tomb?
    {//tr1
        theme: 'Optika', //td-k
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {//tr2
        theme: 'Asztronómia',//td-k
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {//tr3
        theme: 'Kvantumfizika',//td-k
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {//tr4
        theme: 'Modern fizika',//td-k
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]
const table = document.createElement('table')
document.body.appendChild(table)
const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)

const th = document.createElement('th') //1.th hozza adasa
th.innerText = "Fizika területe"
tr.appendChild(th)

const th1 = document.createElement('th') //2.th hozza adasa
th1.innerText ="Időszak"
tr.appendChild(th1)

const th2 = document.createElement('th') //3.th hozza adasa
th2.innerText ="Képviselők"
tr.appendChild(th2)

th2.colSpan="2" //kitölt 2 helyet

const tbody = document.createElement('tbody')
table.appendChild(tbody)
for(const seged of arr){
    const tr1 = document.createElement('tr') //a tr hozzarendelem
    tbody.appendChild(tr1)
    const td = document.createElement('td') //az  1.td meghatározása
    td.innerText = seged.theme
    tr1.appendChild(td)

    const td1 = document.createElement('td') //az  2.td meghatározása
    td1.innerText = seged.time
    tr1.appendChild(td1)

    const td2 = document.createElement('td')//az  3.td meghatározása
    td2.innerText = seged.scientist1
    tr1.appendChild(td2)

    

    if (seged.scientist2 === undefined){// van-e ott valami
         td2.colSpan = 2 //ha, akkor colspan
    }
    else{
    const td3 = document.createElement('td') //ugyan az mint felette csak elágazásban //az  4.td meghatározása
    td3.innerText = seged.scientist2
    tr1.appendChild(td3)
    }
}

