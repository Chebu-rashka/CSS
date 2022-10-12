const kingPieceEl=document.getElementById("king-piece")

kingPieceEl.addEventListener("click", ()=>{
    console.log("click")
    if(kingPieceEl.classList.contains('selected')){
        kingPieceEl.innerHTML="Piece"
    } else{
        kingPieceEl.classList.add("selected")
        kingPieceEl.innerHTML="King Piece"
    }
})
