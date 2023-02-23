const nav_a_parents = document.querySelector(".nav_a_parents")
const nav_a_students = document.querySelector(".nav_a_students")
const parents =document.querySelector(".parents")
const students =document.querySelector(".students")

students.style.height = "130px"


let a = true

nav_a_parents.addEventListener("mouseover", () => {
    if(a === true){
        parents.style.display = "block"
        a = false
    } else{
        parents.style.display = "none"
        a = true
    }

})

nav_a_students.addEventListener("click", () => {
    if(a === true){
        students.style.display = "block"
        a = false
    } else if(a == false){
        students.style.display = "none"
        a = true
    }

})