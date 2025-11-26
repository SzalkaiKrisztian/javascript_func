const htmlDropdown = document.getElementById('htmldropdown'); // elkérjük a htmldropdown id-jú elemet
createOtherDivForSelect(htmlDropdown.parentElement)
hideBasedOnSelected(htmlDropdown); // alapértelmezett értéken megnézzük mi jelenjen meg
htmlDropdown.addEventListener('change', changeDropdownList) // hozzáadunk egy eventListenert

const htmlcheckbox = document.getElementById('htmlcheckbox'); // elkérjük a htmlcheckbox id-val rendelkező elemet
hideBasedOnCheckbox(htmlcheckbox); // a checkboxnak van alapértelmezett értéke (hamis)
htmlcheckbox.addEventListener('change', changeCheckbox) // hozzáadunk egy eventlistenert
