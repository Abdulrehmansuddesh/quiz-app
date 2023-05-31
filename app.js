
var startQuizBtn = document.querySelector(".startQuizBtn")

function formBTN() {
    var formBtn = document.getElementById("form")
    var inputFields = form.querySelectorAll("input")

    for(var input of inputFields){
        if(!input.value){
            alert("Required Fields Can't be Empty")
            return
        }

    }

    formBtn.style.display = "none";
    startQuizBtn.style.display = "flex" 

    // console.log(formBtn)

   
    
}