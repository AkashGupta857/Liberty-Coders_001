let onclick = document.querySelectorAll("li")
let cont1 = document.querySelector(".cont1")
let cont2 = document.querySelector(".cont2")
let cont3 = document.querySelector(".cont3")
let cont4 = document.querySelector(".cont4")
let cont5 = document.querySelector(".cont5")
let cont6 = document.querySelector(".cont6")
let cont7 = document.querySelector(".cont7")
let cont8 = document.querySelector(".cont8")
let cont9 = document.querySelector(".cont9")
let cont10 = document.querySelector(".cont10")
let cont11 = document.querySelector(".cont11")
let cont12 = document.querySelector(".cont12")
let cont13 = document.querySelector(".cont13")
let cont14 = document.querySelector(".cont14")
let cont15 = document.querySelector(".cont15")
let cont16 = document.querySelector(".cont16")
let cont17 = document.querySelector(".cont17")
let cont18 = document.querySelector(".cont18")
let cont19 = document.querySelector(".cont19")
let cont20 = document.querySelector(".cont20")
let cont21 = document.querySelector(".cont21")
let cont22 = document.querySelector(".cont22")
let cont23 = document.querySelector(".cont23")
let cont24 = document.querySelector(".cont24")
let pre = 0
let next = 0
onclick.forEach(obj => {
    obj.addEventListener("click", function(){    
        if(obj.classList.value == 1){
            cont1.style.display="block"
            pre = next
            next = 1
        }
        if(obj.classList.value == 2){
            cont2.style.display = "block"
            pre = next
            next = 2
        }
        if(obj.classList.value==3){
            cont3.style.display = "block"
            pre = next
            next = 3
        }
        if(obj.classList.value==4){
            cont4.style.display = "block"
            pre = next
            next = 4
        }
        if(obj.classList.value==5){
            cont5.style.display = "block"
            pre = next
            next = 5
        }
        if(obj.classList.value==6){
            cont6.style.display = "block"
            pre = next
            next = 6
        }
        if(pre == 1){
            cont1.style.display="none"
        }
        if(pre == 2){
            cont2.style.display = "none"
        }
        if(pre==3){
            cont3.style.display = "none"
        }
        if(pre==4){
            cont4.style.display = "none"
        }
        if(pre==5){
            cont5.style.display = "none"
        }
        if(pre==6){
            cont6.style.display = "none"
        }

    })
})  
console.log("after")