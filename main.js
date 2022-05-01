const carWash = document.getElementById("car-wash")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")

const billing = document.getElementById("bill-here")
let service1 = false
let service2 = false
let service3 = false

let finalValue = 0

const totalBill = document.getElementById("final-sum")

carWash.addEventListener("click", function(){
   if (service1 === false){
        billing.innerHTML += `
    <p class='bill-text'>Car Wash </p> 
    <p class="cost">$10</p>
    `
    service1 = true
    value1 = true
    finalValue +=10
    totalBill.textContent = "$" + finalValue

   }
})

mowLawn.addEventListener("click", function(){
    if (service2 === false){
         billing.innerHTML += `
     <p class='bill-text'> Mow Lawn </p> 
     <p class="cost">$20</p> 
     `
     service2 = true
     value2 = true
     finalValue += 20
     totalBill.textContent = "$" + finalValue
    }
 })

 pullWeeds.addEventListener("click", function(){
    if (service3 === false){
         billing.innerHTML += `
     <p class='bill-text'> Pull Weeds </p> 
     <p class="cost">$30</p>
     `
     service3 = true
     value3 = true
     finalValue += 30
     totalBill.textContent = "$" + finalValue
    }
 })



// Make the final value work to deliver the sum in total div selected
let fetchValue = 0

function random(){
    for (let i=0; i<finalValue.length; i++){
fetchValue += finalValue[i]
    }
    return fetchValue
}