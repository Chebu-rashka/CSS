const numberEls=document.getElementsByClassName('number')
console.log(numberEls.length)

// let operator=""
// screener.innerHTML=a
const screener=document.getElementById("screen")

for(let i=0;i<numberEls.length; i++) {
    numberEls[i].addEventListener('click',(event)=>{
        
        screener.innerHTML+=event.target.innerHTML


// if(numberEls[i].innerHTML==="+"){
//     console.log("plus");
//     a=parseInt(screener.innerHTML);
//     operator="+"
//     screener.innerHTML=""
// }
    })
}
