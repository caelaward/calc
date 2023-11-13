// let btn = document.querySelector('[data-btn]')
// let display = document.querySelector('[data-answer]')

// btn.addEventListener('click', add )
// function add() {
//     let first = document.querySelector('[data-first]').value
//     let second = document.querySelector('[data-second]').value
//     let answer = eval(`${first}+  ${second}`)
//     console.log(answer)
//     display.value = answer
// }

let display = document.querySelector('[data-display]');
let num = document.querySelectorAll('[data-num]');

num.forEach(button => { 
    button.addEventListener('click',function() {
      display.value += button.getAttribute('value')
    })
} )


let clear = document.querySelector('[data-clear]')
clear.addEventListener('click', function(){
    display.value = '';
})

let per = document.querySelector('[data-per]')
per.addEventListener('click', function(){
    display.value += '%';
})

let del = document.querySelector('[data-delete]')
del.addEventListener('click', function(){
    display.value = display.value.slice(0,-1);
})

let divide = document.querySelector('[data-divide]')
divide.addEventListener('click', function(){
    display.value += '/';
})

let add = document.querySelector('[data-add]')
add.addEventListener('click', function(){
    display.value += '+';
})

let sub = document.querySelector('[data-sub]')
sub.addEventListener('click', function(){
    display.value += '-';
})

let multi = document.querySelector('[data-multi]')
multi.addEventListener('click', function(){
    display.value += '*';
})

let dot = document.querySelector('[data-dot]')
dot.addEventListener('click', function(){
    display.value += '.';
})

let answer = document.querySelector('[data-answer]')
answer.addEventListener('click', function(){
 try{
    display.value = eval(display.value)
 }catch (error){
    display.value = "error"
 }
})






// let btn7 = document.querySelector('[data-7]')
// btn7.addEventListener('click', ()=> addValue(btn7.value))

//  function addValue(value) {
//     display.value += value

//     // alert(value)
   
    
//  }


