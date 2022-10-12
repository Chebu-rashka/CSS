// const kingPieceEl=document.getElementById("king-piece")

// kingPieceEl.addEventListener("click", ()=>{
//     console.log("click")
//     if(kingPieceEl.classList.contains('selected')){
//         kingPieceEl.innerHTML="Piece"
//     } else{
//         kingPieceEl.classList.add("selected")
//         kingPieceEl.innerHTML="King Piece"
//     }
// })

const incrementButton=document.getElementById("increment")
const decrementButton=document.getElementById("decrement")
const screener=document.getElementById("screen")

let count=0
screener.innerHTML=count;

incrementButton.addEventListener('click',()=>{
    count++
    screener.innerHTML=count;
})
decrementButton.addEventListener('click',()=>{
    count--
    screener.innerHTML=count;
})


