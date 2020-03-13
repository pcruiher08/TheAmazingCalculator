var sum = document.querySelector("#addButton")
var sub = document.querySelector("#substractButton")
var mult = document.querySelector("#multiplicationButton")
var div = document.querySelector("#divisionButton")
var res = document.querySelector("#resultValue")
var log = document.querySelector("#logInformation")

var inp = document.querySelector(".inputNumber")
var reset = document.querySelector(".resetButton")
var equal = document.querySelector(".equalButton")

var lastNextLine = 0
var lastOperation = ""
const isNumber = /^\d+(\.\d+)?$/

sum.addEventListener("click",(event)=>{
    if(isNumber.test(inp.value)){
        console.log(inp.value + ': is a number')
        log.value += inp.value
        log.value += " + "
        inp.value = ""
    }
})

sub.addEventListener("click",(event)=>{
    if(isNumber.test(inp.value)){
        log.value += inp.value
        log.value += " - "
        inp.value = ""
    }
})

mult.addEventListener("click",(event)=>{
    if(isNumber.test(inp.value)){
        log.value += inp.value
        log.value += " * "
        inp.value = ""
    }
})

div.addEventListener("click",(event)=>{
    if(isNumber.test(inp.value)){
        log.value += inp.value
        log.value += " / "
        inp.value = ""
    }
})

equal.addEventListener("click",(event)=>{
    log.value += inp.value
    inp.value = ""
    lastOperation = (log.value).substring(lastNextLine,(log.value).length)
    if(lastOperation.length>1){
        res.value = eval(lastOperation)
        log.value += " = "
        log.value += res.value
        log.value += "\n"
        lastNextLine = (log.value).lastIndexOf("\n")
    }
})

reset.addEventListener("click",(event)=>{
    inp.value = ""
    res.value = ""
    log.value = ""
  })