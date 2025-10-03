/**@type {{theme: string, time:string, scientist1:string, scientist2:string}[]} */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
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

const th = document.createElement('th')
tr.appendChild(th)
const th1 = document.createElement('th')
tr.appendChild(th1)
const th2 = document.createElement('th')
tr.appendChild(th2)

th.innerText = "Fizika területe"
th1.innerText ="Időszak"
th2.innerText ="Képviselők"

th2.colSpan="2"