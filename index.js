const form = document.querySelector("form")
const complete_div = document.querySelector(".complete_div")

const card_front_num = document.querySelector(".card_front_num")
const card_front_name = document.querySelector(".card_front_name")
const card_month = document.querySelector(".card_month")
const card_year = document.querySelector(".card_year")
const card_back_cvc = document.querySelector(".card_back_cvc")

const card_name = document.querySelector(".card_name")
const card_num = document.querySelector(".card_num")
const date_month = document.querySelector(".date_month")
const date_year = document.querySelector(".date_year")
const cvc = document.querySelector(".cvc")

const name_error = document.querySelector(".card_name_error")
const num_error = document.querySelector(".card_num_error")
const date_error = document.querySelector(".date_error")
const cvc_error = document.querySelector(".cvc_error")


card_num.addEventListener("input", ()=>{
    card_front_num.textContent = card_num.value
})

card_name.addEventListener("input", ()=> {
    card_front_name.textContent = card_name.value
    
})

date_month.addEventListener("input", ()=>{
    card_month.textContent = date_month.value
    
})

date_year.addEventListener("input", ()=>{
    card_year.textContent = date_year.value
})

cvc.addEventListener("input", ()=> {
    card_back_cvc.textContent = cvc.value
})

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    formValidation()
    if (card_num.validity.valid && card_name.validity.valid && 
        date_month.validity.valid && date_year.validity.valid && cvc.validity.valid){
            ty_screen()
        }

})


function formValidation(){
    if (card_num.validity.valid){
        num_error.textContent = ""
        card_num.style.borderColor =  "hsl(270, 3%, 87%)"
    }else {
        card_num.style.borderColor =  "red"
        errors()
    }

    if (card_name.validity.valid){
        name_error.textContent = ""
        card_name.style.borderColor =  "hsl(270, 3%, 87%)"
    }else {
        card_name.style.borderColor =  "red"
        errors()
    }

    if (date_month.validity.valid && date_year.validity.valid){
        date_error.textContent = ""
        date_month.style.borderColor =  "hsl(270, 3%, 87%)"
        date_year.style.borderColor =  "hsl(270, 3%, 87%)"
    }else {    
        errors()
    }

    if (cvc.validity.valid){
        cvc_error.textContent = ""
        cvc.style.borderColor = "hsl(270, 3%, 87%)"
    }else {
        cvc.style.borderColor =  "red"
        errors()
    }

}

function errors(){
    if (card_num.validity.valueMissing){
        num_error.textContent = "Can't be blank"
    }

    if (card_num.validity.patternMismatch){
        num_error.textContent = "Invalid Card Number"
    }

    if (card_name.validity.valueMissing){
        name_error.textContent = "Can't be blank"
    }

    if (date_month.validity.valueMissing){
        date_error.textContent = "Can't be blank"
        date_month.style.borderColor =  "red"
    }

    if (date_month.validity.rangeOverflow){
        date_error.textContent = "Invalid Date"
        date_month.style.borderColor =  "red"
    }
    
    if(date_year.validity.valueMissing){
        date_error.textContent = "Can't be blank"
        date_year.style.borderColor =  "red"
    }

    if(date_year.validity.rangeOverflow){
        date_error.textContent = "Invalid Date"
        date_year.style.borderColor =  "red"
    }
    
    if(date_year.validity.rangeUnderflow){
        date_error.textContent = "Invalid Date"
        date_year.style.borderColor =  "red"
    }

    if (cvc.validity.valueMissing){
        cvc_error.textContent = "Can't be blank"
    }

    if (cvc.validity.rangeOverflow){
        cvc_error.textContent = "invalid Cvv"
    }
}


function ty_screen() {
    form.style.display = "none"
    complete_div.style.display = "flex"
    complete_div.style.flexDirection = "column"
}
