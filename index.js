//document.getElementById("count-el").innerText= 5
 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment (){
    count += 1
    countEl.textContent = count
    console.log(count)
     
}


function save(){
let dashsep = count + " - "
saveEl.textContent += dashsep 
countEl.textContent = 0
count = 0
console.log(count)
}
