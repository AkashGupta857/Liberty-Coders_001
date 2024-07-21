let img = document.querySelectorAll(".header>img")
img = img[img.length - 1]
let link = document.querySelector(".links2")
console.log(link)
let toggle = 1
img.addEventListener("click", function(){
    if(toggle){
        link.style.display = "flex",
        toggle = 0
    }else{
        link.style.display = "none",
        toggle = 1        
    }
    console.log(img)
})